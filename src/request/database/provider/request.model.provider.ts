import { CommentLogModel } from '../models/commentlog.model';
import { HotelModel } from '../models/hotel.model';
import { IncidentModel } from '../models/incident.model';
import { RequestModel } from '../models/request.model';
import { RequestTypeModel } from '../models/requestType.model';
import { RoomModel } from '../models/room.model';

export const requestModelProvider = [
  {
    provide: 'REQUEST_REPOSITORY',
    useValue: RequestModel,
  },
  {
    provide: 'HOTEL_REPOSITORY',
    useValue: HotelModel,
  },
  {
    provide: 'ROOM_REPOSITORY',
    useValue: RoomModel,
  },
  {
    provide: 'REQUESTTYPE_REPOSITORY',
    useValue: RequestTypeModel,
  },
  {
    provide: 'INCIDENT_REPOSITORY',
    useValue: IncidentModel,
  },
  {
    provide: 'COMMENTLOG_REPOSITORY',
    useValue: CommentLogModel,
  },
];
