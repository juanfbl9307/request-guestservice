import { Test, TestingModule } from '@nestjs/testing';
import { RequestController } from '../controllers/request.controller';
import { RequestService } from '../services/request.service';
import { RequestResponseStub } from './stubs/requestStub';

jest.mock('../services/request.service');

describe('RequestController', () => {
  let controller: RequestController;
  let service: RequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequestController],
      providers: [RequestService],
    }).compile();

    controller = module.get<RequestController>(RequestController);
    service = module.get<RequestService>(RequestService);
    jest.clearAllMocks();
  });

  describe('findAll with limit pagination', () => {
    let user;
    const limit = 1;
    beforeEach(async () => {
      user = await controller.findAll(limit);
    });
    it('should be return call find all', () => {
      expect(service.findAll).toBeCalled();
    });
    it('should return be called with no params', () => {
      expect(service.findAll).toBeCalledWith(limit);
    });
    it('should return all the request', async () => {
      expect(user).toBe(await service.findAll(limit));
    });
  });

  describe('findAll without limit pagination', () => {
    let user;
    const limit = undefined;
    beforeEach(async () => {
      user = await controller.findAll(limit);
    });
    it('should be return call find all', () => {
      expect(service.findAll).toBeCalled();
    });
    it('should return be called with no params', () => {
      expect(service.findAll).toBeCalledWith(limit);
    });
    it('should return all the request', async () => {
      expect(user).toBe(await service.findAll(limit));
    });
  });

  describe('findOne with existing ID', () => {
    let user;
    const id = 1;
    beforeEach(async () => {
      user = await controller.findOne(id);
      console.log(user);
    });
    it('should be return call find all', () => {
      expect(service.findOne).toBeCalled();
    });
    it('should return be called with no params', () => {
      expect(service.findOne).toBeCalledWith(id);
    });
    it('should return all the request', async () => {
      expect(user).toBe(await service.findOne(id));
    });
  });

  describe('findOne with unexisting ID', () => {
    let user;
    const id = 1;
    let RequestServiceMock;

    beforeEach(async () => {
      user = await controller.findOne(id);
      RequestServiceMock = jest.spyOn(service, 'findOne');
    });
    it('should be return call find all', () => {
      expect(RequestServiceMock).toBeCalled();
    });
    it('should return be called with no params', () => {
      expect(RequestServiceMock).toBeCalledWith(id);
    });
    it('should return all the request', async () => {
      RequestServiceMock.mockResolvedValue(RequestResponseStub());
      expect(user).toBe(RequestResponseStub());
    });
  });
});
