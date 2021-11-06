import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Constants } from '../constants/constants.request';
import { Op } from 'sequelize';
import {
  getDateFromISO8601,
  getOrder,
  getPagination,
  dateTimeFormat,
  dateFormatYMD,
} from '../common/util';
import { commentLogMapper } from '../database/mappers/commentlog.mapper';
import { incidentRequestMapper } from '../database/mappers/incident.mapper';
import { filterParams } from '../database/mappers/request.mapper';
import { RequestCreateDto } from '../dto/request/create-request.dto';
import { RequestCreatedResponse } from '../dto/request/request.create.response.dto';
import { RequestResponseDto } from '../dto/request/response-request.dto';
import { UpdateRequestDto } from '../dto/request/update-request.dto';
import { NotExistException } from '../exceptions/NotExistException';
import { RequestRepository } from '../repositories/request.repository';
import { CommentLogService } from './comment.service';
import { HotelService } from './hotel.service';
import { IncidentService } from './incident.service';
import { RequestTypeService } from './requestType.service';
import { RoomService } from './room.service';
import { CloseRequestDto } from '../dto/request/close.request.dto';
import { ConfirmRequestDto } from '../dto/request/confirm.request.dto';
import { SearchRequestDto } from '../dto/request/search-request.dto';

@Injectable()
export class RequestService {
  constructor(
    private readonly requestRepository: RequestRepository,
    private readonly hotelService: HotelService,
    private readonly roomService: RoomService,
    private readonly requestTypeService: RequestTypeService,
    private readonly incidentService: IncidentService,
    private readonly commentLogService: CommentLogService,
  ) {}

  async create(request: RequestCreateDto): Promise<RequestCreatedResponse> {
    //!se esta creando conflicto si el creator user id no existe
    const response: RequestCreatedResponse = new RequestCreatedResponse();
    const room = await this.roomService.getRoom(
      request.HotelId,
      request.GuestRoom,
    );
    const requestTime = await this.requestTypeService.getTime(
      request.RequestTypeId,
    );
    const timezone = await this.hotelService.getTimezone(request.HotelId);
    const dateTime = dateTimeFormat(timezone);
    const userEntryDateObject = getDateFromISO8601(
      request.UserEntryDate,
      timezone,
      'YYYY-MM-DDTHH:mm:ss',
    );
    const userEntryDate = userEntryDateObject.format;
    request = {
      ...request,
      RoomId: room.Id,
      UserEntryDate: userEntryDate,
      SystemEntryDate: dateTime,
    };
    const requestCreated = await this.requestRepository.create(request);
    const hotelName = await this.hotelService.getName(requestCreated.HotelId);
    const dateFormat = dateFormatYMD(dateTime);
    const ticketNumber = `${hotelName}-${dateFormat}${requestCreated.Id}`;

    const requestUpdated = await this.requestRepository.update(
      requestCreated.Id,
      { TicketNumber: ticketNumber },
    );
    if (requestUpdated === Constants.UPDATE_NOT_SUCCESFULL)
      throw new InternalServerErrorException('TicketNumber update error');

    response.RequestCreated = {
      Id: requestCreated.Id,
      TicketNumber: ticketNumber,
      ...request,
    };

    if (request.RealSolutionDateTime != null) {
      const realSolutionDateTime = getDateFromISO8601(
        request.RealSolutionDateTime,
        timezone,
        'YYYY-MM-DDTHH:mm:ss',
      );
      request.RealSolutionDateTime = realSolutionDateTime.format;
    }

    const expectedSolutionDateTime = getDateFromISO8601(
      request.UserEntryDate,
      timezone,
      'YYYY-MM-DDTHH:mm:ss',
    )
      .moment.add(requestTime, 'seconds')
      .format('YYYY-MM-DDTHH:mm:ss');

    const incident = incidentRequestMapper(
      requestCreated,
      expectedSolutionDateTime,
      request.RealSolutionDateTime,
    );
    const incidentCreated = await this.incidentService.create(incident);

    if (incidentCreated) response.IncidentCreated = incidentCreated;

    if (requestCreated.Comments) {
      const comment = commentLogMapper(requestCreated, userEntryDate);
      const commentCreated = await this.commentLogService.create(comment);
      if (commentCreated) response.CommentCreated = commentCreated;
    }
    return response;
  }

  findAll(pagination?: number): Promise<RequestResponseDto[]> {
    return this.requestRepository.findAll(pagination);
  }

  //!FIX ANY TYPE
  find(params): Promise<any[]> {
    const { limit, offset } = getPagination(params.page - 1, params.pageSize);
    const order = getOrder(params.order, [['UserEntryDate', 'DESC']]);
    const whereInclude = {};
    const searchParams = new SearchRequestDto();

    if (params && params.areaId) {
      whereInclude['AreaId'] = params.areaId;
    }

    if (params && params.confirmed != undefined) {
      params['state'] = 2;
      if (params.confirmed) {
        params['Confirmed'] = params.confirmed;
      } else {
        params['Confirmed'] = {
          [Op.or]: [false, null],
        };
      }

      params['RequestStateId'] = {
        [Op.in]: [2],
      };

      whereInclude['AreaId'] = {
        [Op.and]: {
          [Op.notIn]: [1, 3, 5],
        },
      };

      if (params.areaId != undefined) {
        whereInclude['AreaId'][Op.and][Op.eq] = params.areaId;
      }
    }

    //?in repository
    //!OLD
    if (params && params.guestFullName) {
      params['GuestName'] = {
        [Op.like]: `%${params.guestFullName}%`,
      };
    }
    //?in repository
    if (params.startDate)
      searchParams.UserEntryDate = [params.startDate, params.endDate];
    //!OLD
    if (params && params.startDate) {
      params['UserEntryDate'] = {
        [Op.gte]: params.startDate,
      };
    }
    if (params && params.endDate) {
      params['UserEntryDate'][Op.lte] = params.endDate;
    }

    //TODO
    if ((params && params.state == 1) || params.state == 2) {
      params['RequestStateId'] = params.state;
    } else if (params && params.state == 5) {
      params['RequestStateId'] = {
        [Op.in]: [2, 3],
      };
    } else {
      params['RequestStateId'] = {
        [Op.in]: [1, 2, 3],
      };
    }

    const IsActive = [true, null];

    params = filterParams('order', 'pageSize', params);

    return this.requestRepository.find(
      searchParams,
      params,
      IsActive,
      order,
      whereInclude,
      limit,
      offset,
    );
  }

  //Fix this with a better response to the client
  async findOne(id: number): Promise<any> {
    const notExist = await this.requestRepository.exist(id);
    if (!notExist) {
      throw new NotExistException('Id doesnt exist');
    }
    return this.requestRepository.findById(id);
  }

  //!FIX THIS WITH VALIDATION
  async updateById(id: number, UpdateRequestDto: UpdateRequestDto) {
    const response = {};
    if (UpdateRequestDto.HotelId && UpdateRequestDto.GuestRoom) {
      const room = await this.roomService.getRoom(
        UpdateRequestDto.HotelId,
        UpdateRequestDto.GuestRoom,
      );
      UpdateRequestDto = { ...UpdateRequestDto, RoomId: room.Id };
    }
    if (UpdateRequestDto.HotelId) {
      const timezone = await this.hotelService.getTimezone(
        UpdateRequestDto.HotelId,
      );
      const dateTime = dateTimeFormat(timezone);
      const userEntryDateObject = getDateFromISO8601(
        UpdateRequestDto.UserEntryDate,
        timezone,
        'YYYY-MM-DDTHH:mm:ss',
      );
      const userEntryDate = userEntryDateObject.format;
      UpdateRequestDto = {
        ...UpdateRequestDto,
        UserEntryDate: userEntryDate,
        SystemEntryDate: dateTime,
      };
    }

    UpdateRequestDto = {
      ...UpdateRequestDto,
    };

    await this.requestRepository.update(id, UpdateRequestDto);
    response['Resquest Updated'] = UpdateRequestDto;
    return response;
  }

  async disable(id: number): Promise<string> {
    const diableUpdate = await this.requestRepository.update(id, {
      IsDisabled: true,
    });
    if (diableUpdate === Constants.UPDATE_NOT_SUCCESFULL)
      throw new NotFoundException('Request not found');

    return `Request Disable`;
  }

  async close(params): Promise<string> {
    const requestParams: CloseRequestDto = new CloseRequestDto();
    requestParams.RequestStateId = params.RequestStateId;
    const timezone = await this.hotelService.getTimezone(params.HotelId);
    const dateTime = dateTimeFormat(timezone);
    if (
      params.RequestStateId != Constants.REQUEST_STATE_OPEN &&
      params.SystemClosedDateTime
    ) {
      params.SystemClosedDateTime = getDateFromISO8601(
        params.SystemClosedDateTime,
        timezone,
        'YYYY-MM-DDTHH:mm:ss',
      );
      requestParams.SystemClosedDateTime = params.SystemClosedDateTime;
    }
    await this.incidentService.updateByRequestId(params.RequestId, {
      RealSolutionDateTime: dateTime,
    });

    const requestClosed = await this.requestRepository.update(
      params.RequestId,
      requestParams,
    );
    console.log(requestClosed);
    if (requestClosed === Constants.UPDATE_NOT_SUCCESFULL)
      throw new NotFoundException('Request update failed');
    return 'Request closed successfully';
  }

  async confirm(params): Promise<string> {
    const confirmParams: ConfirmRequestDto = new ConfirmRequestDto();
    const timezone = await this.hotelService.getTimezone(params.HotelId);
    const dateTime = dateTimeFormat(timezone);
    confirmParams.ConfirmedDateTime = dateTime;
    confirmParams.Confirmed = true;

    const requestConfirmed = await this.requestRepository.update(
      params.RequestId,
      confirmParams,
    );
    if (requestConfirmed === Constants.UPDATE_NOT_SUCCESFULL)
      throw new NotFoundException('Request not found');
    return 'Request confirmed successfully';
  }
}
