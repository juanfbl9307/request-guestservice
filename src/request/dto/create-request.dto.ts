import {
  IsString,
  IsNumber,
  IsDate,
  IsBoolean,
  IsOptional,
} from 'class-validator';
export class CreateRequestDto {
  @IsNumber()
  Id: number;

  @IsString()
  @IsOptional()
  TicketNumber: string;

  @IsString()
  GuestName: string;

  @IsString()
  GuestRoom: string;

  @IsString()
  GuestCompany: string;

  @IsString()
  Comments: string;

  @IsNumber()
  RequestTypeId: number;

  @IsNumber()
  HotelId: number;

  @IsNumber()
  AssignedUserId: number;

  @IsNumber()
  CreatorUserId: number;

  @IsNumber()
  RequestStateId: number;

  @IsNumber()
  RoomId: number;

  @IsString()
  UserId: string;

  @IsDate()
  SystemEntryDate: Date;

  @IsDate()
  UserEntryDate: Date;

  @IsDate()
  ConfirmedDateTime: Date;

  @IsBoolean()
  AssigneeNotAvailable: boolean;

  @IsBoolean()
  Confirmed: boolean;

  @IsBoolean()
  AffectedService: boolean;

  @IsDate()
  SystemClosedDateTime: Date;

  @IsBoolean()
  IsDisabled: boolean;
}
