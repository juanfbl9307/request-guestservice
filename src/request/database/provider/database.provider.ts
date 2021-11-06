import { Sequelize } from 'sequelize-typescript';
import { Area } from '../models/area.model';
import { CommentLogModel } from '../models/commentlog.model';
import { HotelModel } from '../models/hotel.model';
import { IncidentModel } from '../models/incident.model';
import { RequestState } from '../models/request-state.model';
import { RequestType } from '../models/request-type.model';
import { RequestModel } from '../models/request.model';
import { RequestTypeModel } from '../models/requestType.model';
import { RoomModel } from '../models/room.model';
import { UserModel } from '../models/user.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mssql',
        host: 'localhost',
        port: 1433,
        username: 'username',
        password: 'password',
        database: 'GuestService',
        logging: false,
      });
      sequelize.addModels([
        UserModel,
        RequestModel,
        RequestType,
        RequestState,
        IncidentModel,
        HotelModel,
        Area,
        HotelModel,
        RoomModel,
        RequestTypeModel,
        CommentLogModel,
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
