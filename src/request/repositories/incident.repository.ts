import { Inject, Injectable } from '@nestjs/common';
import { IncidentModel } from '../database/models/incident.model';
import { IncidentCreateDto } from '../dto/incident/incident.create.dto';
import { IncidentCreatedResponseDto } from '../dto/incident/incident.create.response.dto';

@Injectable()
export class IncidentRepository {
  constructor(
    @Inject('INCIDENT_REPOSITORY') private incidentModel: typeof IncidentModel,
  ) {}

  async create(
    incident: IncidentCreateDto,
  ): Promise<IncidentCreatedResponseDto> {
    try {
      const incidentCreated = new this.incidentModel(incident);
      return incidentCreated.save();
    } catch (error) {
      throw error;
    }
  }

  async updateByRequestId(requestId: number, params): Promise<number> {
    try {
      const incidentUpdated = await this.incidentModel.update(params, {
        where: { RequestId: requestId },
      });
      return incidentUpdated[0];
    } catch (error) {
      throw error;
    }
  }
}
