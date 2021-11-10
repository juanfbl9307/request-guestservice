import { Test, TestingModule } from '@nestjs/testing';
import { CommentlogCreateDto } from '../../dto/commentlog/commentlog.create.dto';
import { CommentlogCreationResponseDto } from '../../dto/commentlog/commentlog.create.response';
import { CommentLogRepository } from '../../repositories/commentlog.repository';
import { CommentLogService } from '../../services/comment.service';
import { CommentTest } from '../constants/constants.test';

jest.mock('../../repositories/commentlog.repository');

describe('CommentLogService', () => {
  let service: CommentLogService;
  let repository: CommentLogRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommentLogService, CommentLogRepository],
    }).compile();

    service = module.get<CommentLogService>(CommentLogService);
    repository = module.get<CommentLogRepository>(CommentLogRepository);
    jest.clearAllMocks();
  });

  describe('create', () => {
    const comment: CommentlogCreateDto = CommentTest.commentStub;
    let got: CommentlogCreationResponseDto;
    const expected: CommentlogCreationResponseDto = CommentTest.commentExpected;
    beforeEach(async () => {
      got = await service.create(comment);
    });
    it('should call create from repository', () => {
      expect(repository.create).toBeCalled();
    });
    it('should be called with', () => {
      expect(repository.create).toBeCalledWith(comment);
    });
    it('should return a commentlog object', () => {
      expect(got).toEqual(expected);
    });
  });
});
