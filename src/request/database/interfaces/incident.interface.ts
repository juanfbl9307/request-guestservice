export interface IncidentAttributes {
  Id: number;
  RequestId: number;
  GuestRecallCount: number;
  AreaRecallCount: number;
  ExpectedSolutionDateTime: Date;
  RealSolutiondDateTime: Date;
  IsPeriferic: boolean;
  PerifericUser: string;
  PerifericArea: string;
}
