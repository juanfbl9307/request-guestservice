import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { AreaAttributes } from '../interfaces/area.interface';

@Table({
  tableName: 'AREA',
  timestamps: false,
  createdAt: false,
  updatedAt: false,
})
export class Area extends Model<AreaAttributes> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    field: 'idArea',
  })
  Id: number;

  @Column({
    type: DataType.STRING,
    field: 'name',
  })
  Name: string;
}
