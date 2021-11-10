import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { RequestTypeRepository } from '../../repositories/requestType.repository';
import { RequestTypeService } from '../../services/requestType.service';
import { RequestTypeTest } from '../constants/constants.test';

jest.mock('../../repositories/requestType.repository');

describe('RequestType Service', () => {
  let service: RequestTypeService;
  let repository: RequestTypeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestTypeService, RequestTypeRepository],
    }).compile();

    service = module.get<RequestTypeService>(RequestTypeService);
    repository = module.get<RequestTypeRepository>(RequestTypeRepository);
    jest.clearAllMocks();
  });

  describe('getTime', () => {
    const requestTypeId: number = RequestTypeTest.existingId;
    let got: number;
    const expected: number = RequestTypeTest.AssignedTimeInSeconds;
    beforeEach(async () => {
      got = await service.getTime(requestTypeId);
    });
    it('should call create from repository', () => {
      expect(repository.getTime).toBeCalled();
    });
    it('should be called with', () => {
      expect(repository.getTime).toBeCalledWith(requestTypeId);
    });
    it('should return a time in seconds of the requestType', () => {
      expect(got).toEqual(expected);
    });
  });

  describe('getTime if the requestTypeId doesnt exist', () => {
    const requestTypeId: number = RequestTypeTest.notExistingId;
    let got: Promise<number>;
    const expected: NotFoundException = new NotFoundException(
      'Request Type not found',
    );
    beforeEach(() => {
      got = service.getTime(requestTypeId);
    });
    it('should call create from repository', () => {
      expect(repository.getTime).toBeCalled();
    });
    it('should be called with', () => {
      expect(repository.getTime).toBeCalledWith(requestTypeId);
    });
    it('should throw a NotFoundException', async () => {
      await expect(got).rejects.toThrow(expected);
    });
  });
});
