import { RequestTypeAttribute } from 'src/request/database/interfaces/request-type.interface';

export const RequestTypeStub = (): RequestTypeAttribute => {
  return { Id: 1, Name: 'test name', IsActive: true, AssignedTimeInSeconds: 1 };
};
