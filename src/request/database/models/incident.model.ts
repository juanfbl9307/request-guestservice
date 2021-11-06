import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { IncidentAttributes } from '../interfaces/incident.interface';

@Table({
  tableName: 'INCIDENT',
  timestamps: false,
  createdAt: false,
  updatedAt: false,
})
export class IncidentModel extends Model<IncidentAttributes> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    field: 'idIncident',
    autoIncrement: true,
  })
  Id: number;

  @Column({
    type: DataType.INTEGER,
    field: 'idRequest',
  })
  RequestId: number;

  @Column({
    type: DataType.INTEGER,
    field: 'guestRecallCount',
    defaultValue: 0,
  })
  GuestRecallCount: number;

  @Column({
    type: DataType.INTEGER,
    field: 'areaRecallCount',
    defaultValue: 0,
  })
  AreaRecallCount: number;

  @Column({
    type: DataType.STRING,
    field: 'expectedSolutionDateTime',
  })
  ExpectedSolutionDateTime: Date;

  @Column({
    type: DataType.STRING,
    field: 'realSolutionDateTime',
    defaultValue: null,
  })
  RealSolutionDateTime: Date;

  @Column({
    type: DataType.BOOLEAN,
    field: 'isPeriferic',
    defaultValue: false,
  })
  IsPeriferic: boolean;

  @Column({
    type: DataType.STRING,
    field: 'perifericUser',
    defaultValue: '',
  })
  PerifericUser: string;

  @Column({
    type: DataType.STRING,
    field: 'perifericArea',
    defaultValue: '',
  })
  PerifericArea: string;
}
