import { Sequelize } from 'sequelize-typescript';
import { Area } from '../models/area.model';
import { Hotel } from '../models/hotel.model';
import { Incident } from '../models/incident.model';
import { RequestState } from '../models/request-state.model';
import { RequestType } from '../models/request-type.model';
import { RequestModel } from '../models/request.model';
import { User } from '../models/user.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'password',
        database: 'request',
        logging: false,
      });
      sequelize.addModels([
        User,
        RequestModel,
        RequestType,
        RequestState,
        Incident,
        Hotel,
        Area,
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
