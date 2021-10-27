import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { RequestTypeAttribute } from '../interfaces/request-type.interface';

@Table({
  tableName: 'REQUESTTYPE',
  timestamps: false,
  createdAt: false,
  updatedAt: false,
})
export class RequestType extends Model<RequestTypeAttribute> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    field: 'idRequestType',
  })
  Id: number;

  @Column({
    type: DataType.STRING,
    field: 'name',
  })
  Name: string;

  @Column({
    type: DataType.BOOLEAN,
    field: 'isActive',
  })
  IsActive: boolean;

  @Column({
    type: DataType.INTEGER,
    field: 'assignedTimeInSeconds',
  })
  AssignedTimeInSeconds: number;
}
