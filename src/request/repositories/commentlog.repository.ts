import { Inject, Injectable } from '@nestjs/common';
import { CommentLogModel } from '../database/models/commentlog.model';
import { CommentlogCreateDto } from '../dto/commentlog/commentlog.create.dto';
import { CommentlogCreationResponseDto } from '../dto/commentlog/commentlog.create.response';

@Injectable()
export class CommentLogRepository {
  constructor(
    @Inject('COMMENTLOG_REPOSITORY')
    private commentLogModel: typeof CommentLogModel,
  ) {}

  async create(
    comment: CommentlogCreateDto,
  ): Promise<CommentlogCreationResponseDto> {
    try {
      const commentCreated = new this.commentLogModel(comment);
      return commentCreated.save();
    } catch (error) {
      throw error;
    }
  }
}
