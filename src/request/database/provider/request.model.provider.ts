import { RequestModel } from '../models/request.model';

export const requestProvider = [
  {
    provide: 'REQUEST_REPOSITORY',
    useValue: RequestModel,
  },
];
