import { ResponseRequestDto } from 'src/request/dto/response-request.dto';
import { IncidentStub } from './incidentStub';
import { RequestTypeStub } from './requestTypeStub';
import { UserStub } from './userStub';

export const RequestResponseStub = (): ResponseRequestDto => {
  return {
    Id: 1,
    TicketNumber: 'test ticket',
    GuestName: 'guestname test',
    GuestRoom: 'guestroom test',
    GuestCompany: 'guestcompany test',
    Comments: 'comment test',
    RequestTypeId: 1,
    HotelId: 1,
    AssignedUserId: 1,
    CreatorUserId: 1,
    RequestStateId: 1,
    RoomId: 1,
    UserId: 'userid test',
    SystemEntryDate: new Date(),
    RequestType: RequestTypeStub(),
    AssignedUser: UserStub(),
    CreatorUser: UserStub(),
    Incident: IncidentStub(),
    UserEntryDate: new Date(),
    ConfirmedDateTime: new Date(),
    AssigneeNotAvailable: true,
    Confirmed: true,
    AffectedService: true,
    SystemClosedDateTime: new Date(),
    IsDisabled: true,
  };
};
