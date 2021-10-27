import { IncidentAttributes } from '../database/interfaces/incident.interface';
import { RequestTypeAttribute } from '../database/interfaces/request-type.interface';
import { UserAttributes } from '../database/interfaces/user.interface';

export class ResponseRequestDto {
  Id: number;
  TicketNumber: string;
  GuestName: string;
  GuestRoom: string;
  GuestCompany: string;
  Comments: string;
  RequestTypeId: number;
  HotelId: number;
  AssignedUserId: number;
  CreatorUserId: number;
  RequestStateId: number;
  RoomId: number;
  UserId: string;
  SystemEntryDate: Date;
  RequestType?: RequestTypeAttribute;
  AssignedUser?: UserAttributes;
  CreatorUser?: UserAttributes;
  Incident?: IncidentAttributes;
  UserEntryDate: Date;
  ConfirmedDateTime: Date;
  AssigneeNotAvailable: boolean;
  Confirmed: boolean;
  AffectedService: boolean;
  SystemClosedDateTime: Date;
  IsDisabled: boolean;
}
