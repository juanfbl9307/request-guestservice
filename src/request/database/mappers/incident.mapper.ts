export const incidentRequestMapper = (
  request,
  expectedSolutionDateTime,
  realSolutionDateTime,
) => {
  return {
    RequestId: request.Id,
    GuestRecallCount: request.GuestRecallCount,
    AreaRecallCount: request.AreaRecallCount,
    ExpectedSolutionDateTime: expectedSolutionDateTime,
    RealSolutionDateTime: realSolutionDateTime,
    IsPeriferic: request.IsPeriferic,
    PerifericUser: request.PerifericUser,
    PerifericArea: request.PerifericArea,
  };
};
