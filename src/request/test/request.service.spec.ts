import { Test, TestingModule } from '@nestjs/testing';
import { RequestRepository } from '../repositories/request.repository';
import { RequestService } from '../services/request.service';

jest.mock('../repositories/request.repository');

describe('RequestService', () => {
  let service: RequestService;
  let repository: RequestRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestService, RequestRepository],
    }).compile();

    service = module.get<RequestService>(RequestService);
    repository = module.get<RequestRepository>(RequestRepository);
    jest.clearAllMocks();
  });

  describe('findAll with limit value', () => {
    let user;
    const limit = 10;
    beforeEach(async () => {
      user = await service.findAll(limit);
    });
    it('should be return call find all', () => {
      expect(repository.findAll).toBeCalled();
    });
    it('should return called with limit value', () => {
      expect(repository.findAll).toBeCalledWith(limit);
    });
    it('should use limit the request', async () => {
      expect(user).toBe(await repository.findAll(limit));
    });
  });
  describe('findAll without limit value', () => {
    let user;
    beforeEach(async () => {
      user = await service.findAll(undefined);
    });
    it('should be return call find all', () => {
      expect(repository.findAll).toBeCalled();
    });
    it('should return be called with no params', () => {
      expect(repository.findAll).toHaveBeenCalledWith(undefined);
    });
    it('should use limit the request', async () => {
      expect(user).toBe(await repository.findAll(undefined));
    });
  });
});
