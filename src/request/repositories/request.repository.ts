import { Inject, Injectable } from '@nestjs/common';
import { Op } from 'sequelize';
import { mapRequestKeys } from '../database/mappers/request.mapper';
import { RequestType } from '../database/models/request-type.model';
import { RequestModel } from '../database/models/request.model';
import { UserModel } from '../database/models/user.model';
import { RequestResponseDto } from '../dto/request/response-request.dto';

@Injectable()
export class RequestRepository {
  constructor(
    @Inject('REQUEST_REPOSITORY') private requestModel: typeof RequestModel,
  ) {}
  async create(createRequest): Promise<any> {
    const requestCreated = new this.requestModel(createRequest);
    return requestCreated.save();
  }

  async findById(id: number): Promise<RequestResponseDto> {
    try {
      const request = await this.requestModel.findByPk<RequestModel>(id, {
        include: { all: true },
      });
      if (request == null) return null;
      return mapRequestKeys(request);
    } catch (error) {
      console.log(error);
    }
  }

  async findAll(pagination): Promise<RequestResponseDto[]> {
    try {
      const request = await this.requestModel.findAll({
        limit: pagination,
        include: { all: true },
      });

      const requestMapped = [];

      request.forEach((element) => {
        requestMapped.push(mapRequestKeys(element));
      });

      return requestMapped;
    } catch (error) {
      console.log(error);
    }
  }

  async find(
    searchParams,
    params,
    IsActive,
    order,
    whereInclude,
    limit,
    offset,
  ): Promise<RequestModel[]> {
    //!THIS WILL BE THE NEW SEARCH
    const searchTCCHANGEEEEEE = {
      GuestName: {
        [Op.like]: `%${searchParams.GuestName}%`,
      },
      UserEntryDate: {
        [Op.or]: [
          {
            from: {
              [Op.between]: [searchParams[0], searchParams[1]],
            },
          },
          {
            to: {
              [Op.between]: [searchParams[0], searchParams[1]],
            },
          },
        ],
      },
    };
    const whereRequestType = { [Op.or]: [IsActive[0], IsActive[1]] };
    console.log(whereRequestType);
    const requestFinded = this.requestModel.findAndCountAll({
      where: params,
      order: order,
      limit: limit,
      offset: offset,
      include: [
        { model: UserModel, where: whereInclude, as: 'AssignedUser' },
        { all: true, nested: true },
        { model: RequestType, where: { IsActive: whereRequestType } },
      ],
    });
    return (await requestFinded).rows;
  }

  async exist(id: number) {
    try {
      const exist = this.requestModel.findAndCountAll({
        where: { HotelId: id },
      });
      return exist;
    } catch (error) {
      console.error(error);
    }
  }

  async update(requestId, params) {
    try {
      const updated = await this.requestModel.update(params, {
        where: { Id: requestId },
      });
      return updated[0];
    } catch (err) {
      throw err;
    }
  }
}
