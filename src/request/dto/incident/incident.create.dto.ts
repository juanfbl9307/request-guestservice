import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class IncidentCreateDto {
  //0 default
  @IsOptional()
  @IsNumber()
  GuestRecallCount: number;

  //0 default
  @IsOptional()
  @IsNumber()
  AreaRecallCount: number;

  //0 default
  @IsOptional()
  @IsBoolean()
  IsPeriferic: boolean;

  //'' default
  @IsOptional()
  @IsString()
  PerifericUser: string;

  //'' default
  @IsOptional()
  @IsString()
  PerifericArea: string;

  RequestId: number;
  ExpectedSolutionDateTime: Date;
  RealSolutionDateTime: Date;
}
