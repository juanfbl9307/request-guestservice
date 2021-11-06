import { Inject, Injectable } from '@nestjs/common';
import { RequestTypeModel } from '../database/models/requestType.model';

@Injectable()
export class RequestTypeRepository {
  constructor(
    @Inject('REQUESTTYPE_REPOSITORY')
    private requestTypeModel: typeof RequestTypeModel,
  ) {}

  async getTime(requestTypeId: number): Promise<number> {
    try {
      const requestSeconds = await this.requestTypeModel.findByPk(
        requestTypeId,
      );
      if (requestSeconds === null) return null;
      return requestSeconds.AssignedTimeInSeconds;
    } catch (error) {
      throw error;
    }
  }
}
