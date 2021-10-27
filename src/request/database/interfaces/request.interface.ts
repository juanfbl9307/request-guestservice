export interface RequestAttribute {
  Id: number;
  TicketNumber: string;
  GuestName: string;
  GuestRoom: string;
  GuestCompany: string;
  //GuestPhone:string
  //GuestEmail:string
  Comments: string;
  RequestTypeId: number;
  HotelId: number;
  AssignedUserId: number;
  CreatorUserId: number;
  RequestStateId: number;
  RoomId: number;
  UserId: string;
  SystemEntryDate: Date;
  UserEntryDate: Date;
  ConfirmedDateTime: Date;
  AssigneeNotAvailable: boolean;
  Confirmed: boolean;
  AffectedService: boolean;
  SystemClosedDateTime: Date;
  IsDisabled: boolean;
}
