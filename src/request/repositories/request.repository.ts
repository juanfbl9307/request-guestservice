import { Inject, Injectable } from '@nestjs/common';
import { Area } from '../database/models/area.model';
import { RequestType } from '../database/models/request-type.model';
import { RequestModel } from '../database/models/request.model';
import { User } from '../database/models/user.model';

import { CreateRequestDto } from '../dto/create-request.dto';
import { ResponseRequestDto } from '../dto/response-request.dto';

@Injectable()
export class RequestRepository {
  constructor(
    @Inject('REQUEST_REPOSITORY') private requestModel: typeof RequestModel,
  ) {}
  async create(createRequestDto: CreateRequestDto): Promise<CreateRequestDto> {
    try {
      const requestCreated = new this.requestModel(createRequestDto).save();
      return requestCreated;
    } catch (error) {
      console.log(error);
    }
  }

  async findById(id: number): Promise<ResponseRequestDto> {
    try {
      const request = await this.requestModel.findByPk<RequestModel>(id, {
        include: { all: true },
      });
      return {
        Id: request.Id,
        TicketNumber: request.TicketNumber,
        GuestName: request.GuestName,
        GuestRoom: request.GuestRoom,
        GuestCompany: request.GuestCompany,
        Comments: request.Comments,
        RequestTypeId: request.RequestStateId,
        HotelId: request.HotelId,
        AssignedUserId: request.AssignedUserId,
        CreatorUserId: request.createdAt,
        RequestStateId: request.RequestStateId,
        RoomId: request.RoomId,
        UserId: request.UserId,
        SystemEntryDate: request.SystemEntryDate,
        RequestType: request.RequestType,
        AssignedUser: request.AssignedUser,
        CreatorUser: request.CreatorUser,
        Incident: request.Incident,
        UserEntryDate: request.UserEntryDate,
        ConfirmedDateTime: request.ConfirmedDateTime,
        AssigneeNotAvailable: request.AssigneeNotAvailable,
        Confirmed: request.Confirmed,
        AffectedService: request.AffectedService,
        SystemClosedDateTime: request.SystemClosedDateTime,
        IsDisabled: request.IsDisabled,
      };
    } catch (error) {
      console.log(error);
    }
  }

  async findAll(pagination = 10): Promise<ResponseRequestDto[]> {
    try {
      const request = await this.requestModel.findAll({
        limit: pagination,
        include: { all: true },
      });
      return request.map((r) => ({
        Id: r.Id,
        TicketNumber: r.TicketNumber,
        GuestName: r.GuestName,
        GuestRoom: r.GuestRoom,
        GuestCompany: r.GuestCompany,
        Comments: r.Comments,
        RequestTypeId: r.RequestStateId,
        HotelId: r.HotelId,
        AssignedUserId: r.AssignedUserId,
        CreatorUserId: r.createdAt,
        RequestStateId: r.RequestStateId,
        RoomId: r.RoomId,
        UserId: r.UserId,
        SystemEntryDate: r.SystemEntryDate,
        RequestType: r.RequestType,
        AssignedUser: r.AssignedUser,
        CreatorUser: r.CreatorUser,
        Incident: r.Incident,
        UserEntryDate: r.UserEntryDate,
        ConfirmedDateTime: r.ConfirmedDateTime,
        AssigneeNotAvailable: r.AssigneeNotAvailable,
        Confirmed: r.Confirmed,
        AffectedService: r.AffectedService,
        SystemClosedDateTime: r.SystemClosedDateTime,
        IsDisabled: r.IsDisabled,
      }));
    } catch (error) {
      console.log(error);
    }
  }

  async find(
    search,
    whereRequestType,
    order,
    whereInclude,
    limit,
    offset,
  ): Promise<RequestModel[]> {
    const requestFinded = this.requestModel.findAndCountAll({
      where: search,
      order: order,
      limit: limit,
      offset: offset,
      include: [
        { all: true, nested: true },
        { model: RequestType, where: whereRequestType },
      ],
    });
    return (await requestFinded).rows;
  }
}
