import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { CommentAttributes } from '../interfaces/comment.interface';

@Table({
  tableName: 'COMMENTLOG',
  timestamps: false,
  createdAt: false,
  updatedAt: false,
})
export class CommentLogModel extends Model<CommentAttributes> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    field: 'idCommentLog',
    autoIncrement: true,
  })
  Id: number;

  @Column({
    type: DataType.STRING,
    field: 'entryDate',
  })
  EntryDate: Date;

  @Column({
    type: DataType.STRING,
    field: 'comments',
  })
  Comments: string;

  @Column({
    type: DataType.INTEGER,
    field: 'idUser',
  })
  UserId: number;

  @Column({
    type: DataType.INTEGER,
    field: 'idRequest',
  })
  RequestId: number;
}
