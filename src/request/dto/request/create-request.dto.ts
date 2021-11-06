import {
  IsString,
  IsNumber,
  IsBoolean,
  IsOptional,
  IsDateString,
  IsNotEmpty,
  Min,
  Max,
} from 'class-validator';
export class RequestCreateDto {
  @IsString()
  @IsNotEmpty()
  GuestName: string;

  @IsString()
  @IsNotEmpty()
  GuestRoom: string;

  @IsNumber()
  HotelId: number;

  //"" default
  @IsOptional()
  @IsString()
  GuestCompany: string;

  @IsNumber()
  CreatorUserId: number;

  @IsNumber()
  AssignedUserId: number;

  @IsNumber()
  @Min(0)
  @Max(255)
  RequestTypeId: number;

  @IsNumber()
  @Min(0)
  @Max(3)
  RequestStateId: number;

  @IsDateString()
  @IsNotEmpty()
  UserEntryDate: string;

  //'' default
  @IsOptional()
  @IsString()
  Comments: string;

  //null default
  @IsOptional()
  @IsBoolean()
  AffectedService: boolean;

  //null default
  @IsOptional()
  @IsString()
  UserId: string;

  RoomId: number;

  SystemEntryDate: string;

  @IsOptional()
  @IsDateString()
  RealSolutionDateTime: string;

  @IsOptional()
  @IsNumber()
  GuestRecallCount: number;

  @IsOptional()
  @IsNumber()
  AreaRecallCount: number;

  @IsOptional()
  @IsBoolean()
  IsPeriferic: boolean;

  @IsOptional()
  @IsString()
  PerifericUser: string;
}
