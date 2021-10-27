import { UserAttributes } from 'src/request/database/interfaces/user.interface';

export const UserStub = (): UserAttributes => {
  return {
    Id: 1,
    FullName: 'testfull name',
    HotelId: 'hotelid test',
    AreaId: 'areaid test',
    Email: 'email test',
    Enabled: true,
    Deleted: true,
  };
};
