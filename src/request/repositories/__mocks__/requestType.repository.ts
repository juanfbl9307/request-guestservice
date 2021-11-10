import { RequestTypeTest } from '../../test/constants/constants.test';

export const RequestTypeRepository = jest.fn().mockReturnValue({
  getTime: jest.fn().mockImplementation((requestTypeId) => {
    if (requestTypeId != RequestTypeTest.existingId) return null;
    return RequestTypeTest.AssignedTimeInSeconds;
  }),
});
