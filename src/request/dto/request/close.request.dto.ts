import { ParseIntPipe } from '@nestjs/common';
import { IsNumberString, IsOptional, IsString } from 'class-validator';

export class CloseRequestDto {
  @IsNumberString()
  RequestId?: number;

  @IsNumberString()
  HotelId?: number;

  @IsNumberString()
  RequestStateId: number;

  @IsOptional()
  @IsString()
  SystemClosedDateTime?: string;
}
