export const mapRoomKeys = (RoomModel) => {
  return {
    Id: RoomModel.Id,
    RoomNumber: RoomModel.RoomNumber,
    HotelId: RoomModel.HotelId,
    ROOMTYPE_ID: RoomModel.ROOMTYPE_ID,
  };
};
