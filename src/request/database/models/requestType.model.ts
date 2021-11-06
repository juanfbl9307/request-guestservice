import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { RequestTypeAttributes } from '../interfaces/requesType.interface';

@Table({
  tableName: 'REQUESTTYPE',
  timestamps: false,
  createdAt: false,
  updatedAt: false,
})
export class RequestTypeModel extends Model<RequestTypeAttributes> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    field: 'idRequestType',
    autoIncrement: true,
  })
  Id: number;

  @Column({
    type: DataType.STRING,
    field: 'name',
  })
  Name: string;

  @Column({
    type: DataType.INTEGER,
    field: 'assignedTimeInSeconds',
  })
  AssignedTimeInSeconds: number;

  @Column({
    type: DataType.INTEGER,
    field: 'idArea',
  })
  AreaId: number;

  @Column({
    type: DataType.BOOLEAN,
    field: 'isAnother',
  })
  IsAnother: boolean;

  @Column({
    type: DataType.BOOLEAN,
    field: 'isGuestFeedBack',
  })
  IsGuestFeedBack: boolean;

  @Column({
    type: DataType.BOOLEAN,
    field: 'isActive',
  })
  IsActive: boolean;
}
