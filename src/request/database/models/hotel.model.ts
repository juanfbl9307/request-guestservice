import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { HotelAttributes } from '../interfaces/hotel.interface';

@Table({
  tableName: 'HOTEL',
  timestamps: false,
  createdAt: false,
  updatedAt: false,
})
export class Hotel extends Model<HotelAttributes> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    field: 'idHotel',
  })
  Id: number;

  @Column({
    type: DataType.STRING,
    field: 'name',
  })
  Name: string;

  // revisar campo
  @Column({
    type: DataType.STRING,
    field: 'TimeZone2', //mayus al principio
  })
  TimeZone: string;
}
