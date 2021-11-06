import { IncidentAttributes } from 'src/request/database/interfaces/incident.interface';

export const IncidentStub = (): IncidentAttributes => {
  return {
    Id: 1,
    RequestId: 1,
    GuestRecallCount: 1,
    AreaRecallCount: 1,
    ExpectedSolutionDateTime: new Date(),
    RealSolutionDateTime: new Date(),
    IsPeriferic: true,
    PerifericUser: 'periferic test user',
    PerifericArea: 'periferic test area',
  };
};
