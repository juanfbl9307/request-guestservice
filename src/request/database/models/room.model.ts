import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { RoomAttributes } from '../interfaces/room.interface';

@Table({
  tableName: 'ROOM',
  timestamps: false,
  createdAt: false,
  updatedAt: false,
})
export class RoomModel extends Model<RoomAttributes> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    field: 'idRoom',
  })
  Id: number;

  @Column({
    type: DataType.STRING,
    field: 'roomNumber',
  })
  RoomNumber: string;

  @Column({
    type: DataType.INTEGER,
    field: 'idHotel',
  })
  HotelId: number;

  @Column({
    type: DataType.STRING,
    field: 'ROOMTYPE_ID',
  })
  ROOMTYPE_ID: string;
}
