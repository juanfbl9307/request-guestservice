import { IsNumberString } from 'class-validator';

export class ConfirmRequestDto {
  @IsNumberString()
  RequestId: number;

  @IsNumberString()
  HotelId: number;

  ConfirmedDateTime: string;

  Confirmed: boolean;
}
