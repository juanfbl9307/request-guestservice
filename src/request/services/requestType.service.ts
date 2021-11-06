import { Injectable, NotFoundException } from '@nestjs/common';
import { RequestTypeRepository } from '../repositories/requestType.repository';

@Injectable()
export class RequestTypeService {
  constructor(private readonly requestTypeRepository: RequestTypeRepository) {}

  async getTime(requestTypeId: number): Promise<number> {
    const requestTime = await this.requestTypeRepository.getTime(requestTypeId);
    if (requestTime === null)
      throw new NotFoundException('Request Type not found');
    return requestTime;
  }
}
