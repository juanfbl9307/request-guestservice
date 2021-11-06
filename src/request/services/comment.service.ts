import { Injectable } from '@nestjs/common';
import { CommentlogCreateDto } from '../dto/commentlog/commentlog.create.dto';
import { CommentlogCreationResponseDto } from '../dto/commentlog/commentlog.create.response';
import { CommentLogRepository } from '../repositories/commentlog.repository';

@Injectable()
export class CommentLogService {
  constructor(private readonly commentLogRepository: CommentLogRepository) {}

  create(comment: CommentlogCreateDto): Promise<CommentlogCreationResponseDto> {
    const commentCreation = this.commentLogRepository.create(comment);
    return commentCreation;
  }
}
