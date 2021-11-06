import { CommentLogService } from '../comment.service';
import { HotelService } from '../hotel.service';
import { IncidentService } from '../incident.service';
import { RequestService } from '../request.service';
import { RequestTypeService } from '../requestType.service';
import { RoomService } from '../room.service';

export const requestServiceProvider = [
  {
    provide: HotelService,
    useClass: HotelService,
  },
  {
    provide: RequestService,
    useClass: RequestService,
  },
  {
    provide: RoomService,
    useClass: RoomService,
  },
  {
    provide: RequestTypeService,
    useClass: RequestTypeService,
  },
  {
    provide: IncidentService,
    useClass: IncidentService,
  },
  {
    provide: CommentLogService,
    useClass: CommentLogService,
  },
];
