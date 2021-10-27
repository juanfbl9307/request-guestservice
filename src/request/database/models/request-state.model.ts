import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { RequestStateAttributes } from '../interfaces/request-state.interface';

@Table({
  tableName: 'REQUESTSTATE',
  timestamps: false,
  createdAt: false,
  updatedAt: false,
})
export class RequestState extends Model<RequestStateAttributes> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    field: 'idRequestState',
  })
  Id: number;

  @Column({
    type: DataType.STRING,
    field: 'name',
  })
  Name: string;
}
