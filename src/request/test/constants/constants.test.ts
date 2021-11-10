export const HotelTest = {
  existingHotelId: 1,
  notExistHotelId: 2,
};

export const CommentTest = {
  commentStub: {
    EntryDate: new Date('2021-11-09T21:26:46.534Z'),
    Comments: 'test comment',
    UserId: 1,
    RequestId: 1,
  },
  commentExpected: {
    Id: 1,
    EntryDate: new Date('2021-11-09T21:26:46.534Z'),
    Comments: 'test comment',
    UserId: 1,
    RequestId: 1,
  },
};

export const IncidentTest = {
  notExistingRequestId: 2,
  existingRequestId: 1,
  incidentCreated: {
    Id: 1,
    RequestId: 1,
    GuestRecallCount: 1,
    AreaRecallCount: 1,
    ExpectedSolutionDateTime: new Date('2021-11-09T21:26:46.534Z'),
    RealSolutionDateTime: new Date('2021-11-09T21:27:46.534Z'),
    IsPeriferic: false,
    PerifericUser: 'periferic user test',
    PerifericArea: 'periferic area test',
  },
  incidentToCreate: {
    RequestId: 1,
    GuestRecallCount: 1,
    AreaRecallCount: 1,
    ExpectedSolutionDateTime: new Date('2021-11-09T21:26:46.534Z'),
    RealSolutionDateTime: new Date('2021-11-09T21:27:46.534Z'),
    IsPeriferic: false,
    PerifericUser: 'periferic user test',
    PerifericArea: 'periferic area test',
  },
};

export const RequestTypeTest = {
  notExistingId: 2,
  existingId: 1,
  AssignedTimeInSeconds: 180,
};
