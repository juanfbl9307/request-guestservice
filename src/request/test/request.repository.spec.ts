import { Test, TestingModule } from '@nestjs/testing';
import { RequestRepository } from '../repositories/request.repository';
import { getModelToken } from '@nestjs/sequelize';
import { Request } from '../database/models/request.model';
import { RequestModel } from './support/request.model';

describe('RequestRepository', () => {
  let repository: RequestRepository;
  let requestModel: RequestModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RequestRepository,
        { provide: getModelToken(Request), useClass: RequestModel },
      ],
    }).compile();
    requestModel = module.get<RequestModel>(RequestModel);
    repository = module.get<RequestRepository>(RequestRepository);
  });

  describe('findAll', () => {
    beforeEach(async () => {
      await repository.findAll();
    });
    it('findAll', () => {
      expect(requestModel.findAll).toBeCalled();
    });
  });
});
