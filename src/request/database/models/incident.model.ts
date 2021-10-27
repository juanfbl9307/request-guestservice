import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { IncidentAttributes } from '../interfaces/incident.interface';

@Table({
  tableName: 'INCIDENT',
  timestamps: false,
  createdAt: false,
  updatedAt: false,
})
export class Incident extends Model<IncidentAttributes> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    field: 'idIncident',
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
  })
  GuestRecallCount: number;

  @Column({
    type: DataType.INTEGER,
    field: 'areaRecallCount',
  })
  AreaRecallCount: number;

  @Column({
    type: DataType.DATE,
    field: 'expectedSolutionDateTime',
  })
  ExpectedSolutionDateTime: Date;

  @Column({
    type: DataType.DATE,
    field: 'realSolutionDateTime',
  })
  RealSolutionDateTime: Date;

  @Column({
    type: DataType.BOOLEAN,
    field: 'isPeriferic',
  })
  IsPeriferic: boolean;

  @Column({
    type: DataType.STRING,
    field: 'perifericUser',
  })
  PerifericUser: string;

  @Column({
    type: DataType.STRING,
    field: 'perifericArea',
  })
  PerifericArea: string;
}
