import { Constants } from '../../constants/constants.request';
import { IncidentTest } from '../../test/constants/constants.test';

export const IncidentRepository = jest.fn().mockReturnValue({
  create: jest.fn().mockReturnValue(IncidentTest.incidentCreated),
  updateByRequestId: jest.fn().mockImplementation((incident) => {
    if (incident.RequestId != IncidentTest.existingRequestId)
      return Constants.UPDATE_NOT_SUCCESFULL;
  }),
});
