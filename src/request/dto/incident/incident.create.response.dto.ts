export class IncidentCreatedResponseDto {
  Id: number;
  RequestId: number;
  GuestRecallCount: number;
  AreaRecallCount: number;
  ExpectedSolutionDateTime: Date;
  RealSolutionDateTime: Date;
  IsPeriferic: boolean;
  PerifericUser: string;
  PerifericArea: string;
}
