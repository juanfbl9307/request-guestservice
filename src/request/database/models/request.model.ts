import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
  HasOne,
} from 'sequelize-typescript';
import { IncidentAttributes } from '../interfaces/incident.interface';
import { RequestAttribute } from '../interfaces/request.interface';
import { IncidentModel } from './incident.model';
import { RequestType } from './request-type.model';
import { UserModel } from './user.model';

@Table({
  tableName: 'REQUEST',
  timestamps: false,
  createdAt: false,
  updatedAt: false,
})
export class RequestModel extends Model<RequestAttribute> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    field: 'idRequest',
    autoIncrement: true,
  })
  Id: number;

  @Column({
    type: DataType.STRING,
    field: 'ticketNumber',
    defaultValue: '-',
  })
  TicketNumber: string;

  @Column({
    type: DataType.STRING,
    field: 'guestName',
  })
  GuestName: string;

  @Column({
    type: DataType.STRING,
    field: 'guestRoom',
  })
  GuestRoom: string;

  @Column({
    type: DataType.STRING,
    field: 'guestCompany',
    defaultValue: '',
  })
  GuestCompany: string;

  @Column({
    type: DataType.STRING,
    field: 'comments',
    defaultValue: '',
  })
  Comments: string;

  @Column({
    type: DataType.INTEGER,
    field: 'idRequestType',
  })
  RequestTypeId: number;
  @BelongsTo(() => RequestType, 'idRequestType')
  RequestType: RequestType;

  @Column({
    type: DataType.INTEGER,
    field: 'idHotel',
  })
  HotelId: number;

  @BelongsTo(() => UserModel, {
    foreignKey: 'idAssignedUser',
    as: 'AssignedUser',
  })
  AssignedUser: UserModel;
  @Column({
    type: DataType.INTEGER,
    field: 'idAssignedUser',
  })
  AssignedUserId: number;

  @BelongsTo(() => UserModel, {
    foreignKey: 'idCreatorUser',
    as: 'CreatorUser',
  })
  CreatorUser: UserModel;
  @Column({
    type: DataType.INTEGER,
    field: 'idCreatorUser',
  })
  CreatorUserId: number;

  @Column({
    type: DataType.INTEGER,
    field: 'idRequestState',
  })
  RequestStateId: number;

  @Column({
    type: DataType.INTEGER,
    field: 'idRoom',
  })
  RoomId: number;

  @Column({
    type: DataType.STRING,
    field: 'UserId',
    defaultValue: null,
  })
  UserId: string;

  @Column({
    type: DataType.STRING,
    field: 'systemEntryDate',
  })
  SystemEntryDate: Date;

  @Column({
    type: DataType.STRING,
    field: 'userEntryDate',
  })
  UserEntryDate: Date;

  @Column({
    type: DataType.STRING,
    field: 'confirmedDateTime',
  })
  ConfirmedDateTime: Date;

  @Column({
    type: DataType.BOOLEAN,
    field: 'assigneeNotAvailable',
  })
  AssigneeNotAvailable: boolean;

  @Column({
    type: DataType.BOOLEAN,
    field: 'confirmed',
  })
  Confirmed: boolean;

  @Column({
    type: DataType.BOOLEAN,
    field: 'affectedService',
    defaultValue: 0,
  })
  AffectedService: boolean;

  //Chequear escritura de este campo
  @Column({
    type: DataType.STRING,
    field: 'SystemClosedDateTime', // este campo con mayus al principio
    defaultValue: null,
  })
  SystemClosedDateTime: Date;

  @Column({
    type: DataType.BOOLEAN,
    field: 'disabled',
  })
  IsDisabled: boolean;

  @Column({
    type: DataType.INTEGER,
    field: 'idRequestInternalType',
    defaultValue: 1,
  })
  IdRequestInternalType: number;

  @HasOne(() => IncidentModel, 'idRequest')
  Incident: IncidentAttributes;
}
