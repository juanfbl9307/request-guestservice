import { CommentLogRepository } from '../commentlog.repository';
import { HotelRepository } from '../hotel.repository';
import { IncidentRepository } from '../incident.repository';
import { RequestRepository } from '../request.repository';
import { RequestTypeRepository } from '../requestType.repository';
import { RoomRepository } from '../room.repository';

export const requestRepositoryProvider = [
  {
    provide: HotelRepository,
    useClass: HotelRepository,
  },
  {
    provide: RequestRepository,
    useClass: RequestRepository,
  },
  {
    provide: RequestTypeRepository,
    useClass: RequestTypeRepository,
  },
  {
    provide: RoomRepository,
    useClass: RoomRepository,
  },
  {
    provide: IncidentRepository,
    useClass: IncidentRepository,
  },
  {
    provide: CommentLogRepository,
    useClass: CommentLogRepository,
  },
];
