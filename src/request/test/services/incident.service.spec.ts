import { Test, TestingModule } from '@nestjs/testing';
import { IncidentCreateDto } from '../../dto/incident/incident.create.dto';
import { IncidentCreatedResponseDto } from '../../dto/incident/incident.create.response.dto';
import { IncidentRepository } from '../../repositories/incident.repository';
import { IncidentService } from '../../services/incident.service';
import { IncidentTest } from '../constants/constants.test';

jest.mock('../../repositories/incident.repository');

describe('Incident Serivice', () => {
  let service: IncidentService;
  let repository: IncidentRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IncidentService, IncidentRepository],
    }).compile();

    service = module.get<IncidentService>(IncidentService);
    repository = module.get<IncidentRepository>(IncidentRepository);
    jest.clearAllMocks();
  });

  describe('create', () => {
    const incident: IncidentCreateDto = IncidentTest.incidentToCreate;
    let got: IncidentCreatedResponseDto;
    const expected: IncidentCreatedResponseDto = IncidentTest.incidentCreated;
    beforeEach(async () => {
      got = await service.create(incident);
    });
    it('should call create from repository', () => {
      expect(repository.create).toBeCalled();
    });
    it('should be called with', () => {
      expect(repository.create).toBeCalledWith(incident);
    });
    it('should return a commentlog object', () => {
      expect(got).toEqual(expected);
    });
  });
});
