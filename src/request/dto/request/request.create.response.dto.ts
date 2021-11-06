import { CommentlogCreationResponseDto } from '../commentlog/commentlog.create.response';
import { IncidentCreatedResponseDto } from '../incident/incident.create.response.dto';
import { RequestResponseDto } from './response-request.dto';

export class RequestCreatedResponse {
  RequestCreated: RequestResponseDto;
  IncidentCreated: IncidentCreatedResponseDto;
  CommentCreated: CommentlogCreationResponseDto;
}
