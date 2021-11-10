import { Injectable, NotFoundException } from '@nestjs/common';
import { Constants } from '../constants/constants.request';
import { IncidentCreateDto } from '../dto/incident/incident.create.dto';
import { IncidentCreatedResponseDto } from '../dto/incident/incident.create.response.dto';
import { IncidentRepository } from '../repositories/incident.repository';

@Injectable()
export class IncidentService {
  constructor(private readonly incidentRepository: IncidentRepository) {}

  create(incident: IncidentCreateDto): Promise<IncidentCreatedResponseDto> {
    const incidentCreation = this.incidentRepository.create(incident);
    return incidentCreation;
  }

  async updateByRequestId(requestId, params): Promise<void> {
    try {
      const incidentUpdate = await this.incidentRepository.updateByRequestId(
        requestId,
        params,
      );
      if (incidentUpdate === Constants.UPDATE_NOT_SUCCESFULL)
        throw new NotFoundException('Request not found');
    } catch (error) {
      throw error;
    }
  }
}
