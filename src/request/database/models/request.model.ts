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
import { Incident } from './incident.model';
import { RequestType } from './request-type.model';
import { User } from './user.model';

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
  })
  Id: number;

  @Column({
    type: DataType.STRING,
    field: 'ticketNumber',
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
  })
  GuestCompany: string;

  @Column({
    type: DataType.STRING,
    field: 'comments',
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

  @BelongsTo(() => User, { foreignKey: 'idAssignedUser', as: 'AssignedUser' })
  AssignedUser: User;
  @Column({
    type: DataType.INTEGER,
    field: 'idAssignedUser',
  })
  AssignedUserId: number;

  @BelongsTo(() => User, { foreignKey: 'idCreatorUser', as: 'CreatorUser' })
  CreatorUser: User;
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
  })
  UserId: string;

  @Column({
    type: DataType.DATE,
    field: 'systemEntryDate',
  })
  SystemEntryDate: Date;

  @Column({
    type: DataType.DATE,
    field: 'userEntryDate',
  })
  UserEntryDate: Date;

  @Column({
    type: DataType.DATE,
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
  })
  AffectedService: boolean;

  //Chequear escritura de este campo
  @Column({
    type: DataType.DATE,
    field: 'SystemClosedDateTime', // este campo con mayus al principio
  })
  SystemClosedDateTime: Date;

  @Column({
    type: DataType.BOOLEAN,
    field: 'disabled',
  })
  IsDisabled: boolean;

  @HasOne(() => Incident, 'idRequest')
  Incident: IncidentAttributes;
}
