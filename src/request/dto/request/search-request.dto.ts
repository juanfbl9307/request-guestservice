import {
  IsBooleanString,
  IsDate,
  IsDateString,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';

export class SearchRequestDto {
  //optional or 0
  @IsNumberString()
  @IsOptional()
  HotelId: number;

  @IsString()
  @IsOptional()
  GuestRoom: string;

  @IsString()
  @IsOptional()
  GuestName: string;

  @IsOptional()
  @IsNumberString()
  RequestTypeId: number;

  //check this param of dates
  @IsDateString()
  @IsOptional()
  startDate: Date;

  @IsDate()
  @IsOptional()
  endDate: Date;

  //optional or 1
  @IsNumberString()
  @IsOptional()
  RequestStateId: number;

  //optional or 10, cant be part of the query
  @IsNumberString()
  @IsOptional()
  pageSize: number;

  //optional or false
  @IsBooleanString()
  @IsOptional()
  IsDisabled: boolean;

  @IsBooleanString()
  @IsOptional()
  AffectedService: boolean;

  @IsBooleanString()
  @IsOptional()
  Confirmed: boolean;

  @IsNumberString()
  @IsOptional()
  AreaId: number;

  //to be defined or ['UserEntryDate', 'DESC']
  //cant be part of the query
  @IsOptional()
  order;

  UserEntryDate: Date[];
}
