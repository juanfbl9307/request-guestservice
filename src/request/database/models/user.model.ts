import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
} from 'sequelize-typescript';
import { UserAttributes } from '../interfaces/user.interface';
import { Area } from './area.model';

@Table({
  tableName: 'USER',
  timestamps: false,
  createdAt: false,
  updatedAt: false,
})
export class UserModel extends Model<UserAttributes> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    field: 'idUser',
  })
  Id: number;

  @Column({
    type: DataType.STRING,
    field: 'fullName',
  })
  FullName: string;

  @Column({
    type: DataType.STRING,
    field: 'idHotel',
  })
  HotelId: string;

  @Column({
    type: DataType.STRING,
    field: 'idArea',
  })
  AreaId: string;

  @Column({
    type: DataType.STRING,
    field: 'email',
  })
  Email: string;

  @Column({
    type: DataType.BOOLEAN,
    field: 'enabled',
  })
  Enabled: boolean;

  @Column({
    type: DataType.BOOLEAN,
    field: 'deleted',
  })
  Deleted: boolean;

  @BelongsTo(() => Area, { foreignKey: 'idArea', as: 'Area' })
  Area: Area;
}
