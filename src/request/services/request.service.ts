import { Injectable } from '@nestjs/common';
import { Op } from 'sequelize';
import { getDateNowFormat, getOrder, getPagination } from '../common/util';
import { CreateRequestDto } from '../dto/create-request.dto';
import { ResponseRequestDto } from '../dto/response-request.dto';
import { UpdateRequestDto } from '../dto/update-request.dto';
import { RequestRepository } from '../repositories/request.repository';

@Injectable()
export class RequestService {
  constructor(private readonly requestRepository: RequestRepository) {}
  create(CreateRequestDto: CreateRequestDto) {
    return this.requestRepository.create(CreateRequestDto);
  }

  findAll(pagination?: number): Promise<ResponseRequestDto[]> {
    return this.requestRepository.findAll(pagination);
  }

  find(params): Promise<ResponseRequestDto[]> {
    const { limit, offset } = getPagination(params.page - 1, params.pageSize);
    const order = getOrder(params.order, [['UserEntryDate', 'DESC']]);
    const where = {};
    const whereInclude = {};
    if (params && params.hotelId) {
      where['HotelId'] = params.hotelId;
    }
    if (params && params.userId) {
      where['UserId'] = params.userId;
    }
    if (params && params.areaId) {
      whereInclude['AreaId'] = params.areaId;
    }
    if (params && params.isDisabled != undefined) {
      console.log('Entro a IsDisabled');
      where['IsDisabled'] = params.isDisabled;
    }
    if (params && params.confirmed != undefined) {
      params['state'] = 2;
      if (params.confirmed) {
        where['Confirmed'] = params.confirmed;
      } else {
        where['Confirmed'] = {
          [Op.or]: [false, null],
        };
      }

      where['RequestStateId'] = {
        [Op.in]: [2],
      };

      where['UserEntryDate'] = {
        [Op.gte]: getDateNowFormat(-60),
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
    if (params && params.affectedService != undefined) {
      where['AffectedService'] = params.affectedService;
    }
    if (params && params.roomNumber) {
      where['GuestRoom'] = params.roomNumber;
    }
    if (params && params.guestFullName) {
      where['GuestName'] = {
        [Op.like]: `%${params.guestFullName}%`,
      };
    }
    if (params && params.startDate) {
      where['UserEntryDate'] = {
        [Op.gte]: params.startDate,
      };
    }
    if (params && params.endDate) {
      where['UserEntryDate'][Op.lte] = params.endDate;
    }
    if (params && params.requestTypeId) {
      where['RequestTypeId'] = params.requestTypeId;
    }

    if ((params && params.state == 1) || params.state == 2) {
      where['RequestStateId'] = params.state;
    } else if (params && params.state == 5) {
      where['RequestStateId'] = {
        [Op.in]: [2, 3],
      };
    } else {
      where['RequestStateId'] = {
        [Op.in]: [1, 2, 3],
      };
    }

    const whereRequestType = {
      IsActive: {
        [Op.or]: [true, null],
      },
    };
    return this.requestRepository.find(
      where,
      whereRequestType,
      order,
      whereInclude,
      limit,
      offset,
    );
  }

  findOne(id: number): Promise<ResponseRequestDto> {
    return this.requestRepository.findById(id);
  }

  update(id: number, UpdateRequestDto: UpdateRequestDto) {
    return `This action updates a #${id} guestService`;
  }

  remove(id: number) {
    return `This action removes a #${id} guestService`;
  }
}
