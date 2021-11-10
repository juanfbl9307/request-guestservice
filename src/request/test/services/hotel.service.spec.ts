import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { HotelRepository } from '../../repositories/hotel.repository';
import { HotelService } from '../../services/hotel.service';
import { HotelTest } from '../constants/constants.test';

jest.mock('../../repositories/hotel.repository');

describe('HotelService', () => {
  let service: HotelService;
  let repository: HotelRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelService, HotelRepository],
    }).compile();

    service = module.get<HotelService>(HotelService);
    repository = module.get<HotelRepository>(HotelRepository);
    jest.clearAllMocks();
  });

  describe('get timezone', () => {
    const hotelId: number = HotelTest.existingHotelId;
    let timezone: string;
    beforeEach(async () => {
      timezone = await service.getTimezone(hotelId);
    });
    it('should call getTimezone from repository', () => {
      expect(repository.getTimezone).toBeCalled();
    });
    it('should be called with', () => {
      expect(repository.getTimezone).toBeCalledWith(hotelId);
    });
    it('should return a timezone', () => {
      expect(timezone).toEqual('test Timezone');
    });
    jest.clearAllMocks();
  });
  describe('get timezone if hotelId has not timezone defined', () => {
    const hotelId: number = HotelTest.notExistHotelId;
    let timezone: Promise<string>;
    beforeEach(() => {
      timezone = service.getTimezone(hotelId);
    });
    it('should call getTimezone from repository', () => {
      expect(repository.getTimezone).toBeCalled();
    });
    it('should be called with', () => {
      expect(repository.getTimezone).toBeCalledWith(hotelId);
    });
    it('should return null from the respository', () => {
      expect(repository.getTimezone(hotelId)).toEqual(null);
    });
    it('should return an exception not found', async () => {
      await expect(timezone).rejects.toThrow(NotFoundException);
    });
  });
  describe('getName', () => {
    const hotelId: number = HotelTest.existingHotelId;
    let hotelName: string;
    beforeEach(async () => {
      hotelName = await service.getName(hotelId);
    });
    it('should call getName from repository', () => {
      expect(repository.getName).toBeCalled();
    });
    it('should be called with', () => {
      expect(repository.getName).toBeCalledWith(hotelId);
    });
    it('should return a hotelName', () => {
      expect(hotelName).toEqual('test HotelName');
    });
    jest.clearAllMocks();
  });
  describe('getName if hotelId has not name defined', () => {
    const hotelId: number = HotelTest.notExistHotelId;
    let hotelName: Promise<string>;
    beforeEach(() => {
      hotelName = service.getName(hotelId);
    });
    it('should call getName from repository', () => {
      expect(repository.getName).toBeCalled();
    });
    it('should be called with', () => {
      expect(repository.getName).toBeCalledWith(hotelId);
    });
    it('should return null from the respository', () => {
      expect(repository.getName(hotelId)).toEqual(null);
    });
    it('should return an exception not found', async () => {
      await expect(hotelName).rejects.toThrow(NotFoundException);
    });
  });
});
