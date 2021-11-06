export const mapRequestKeys = (RequestModel) => {
  return {
    Id: RequestModel.Id,
    TicketNumber: RequestModel.TicketNumber,
    GuestName: RequestModel.GuestName,
    GuestRoom: RequestModel.GuestRoom,
    GuestCompany: RequestModel.GuestCompany,
    Comments: RequestModel.Comments,
    RequestTypeId: RequestModel.RequestStateId,
    HotelId: RequestModel.HotelId,
    AssignedUserId: RequestModel.AssignedUserId,
    CreatorUserId: RequestModel.createdAt,
    RequestStateId: RequestModel.RequestStateId,
    RoomId: RequestModel.RoomId,
    UserId: RequestModel.UserId,
    SystemEntryDate: RequestModel.SystemEntryDate,
    RequestType: RequestModel.RequestType,
    AssignedUser: RequestModel.AssignedUser,
    CreatorUser: RequestModel.CreatorUser,
    Incident: RequestModel.Incident,
    UserEntryDate: RequestModel.UserEntryDate,
    ConfirmedDateTime: RequestModel.ConfirmedDateTime,
    AssigneeNotAvailable: RequestModel.AssigneeNotAvailable,
    Confirmed: RequestModel.Confirmed,
    AffectedService: RequestModel.AffectedService,
    SystemClosedDateTime: RequestModel.SystemClosedDateTime,
    IsDisabled: RequestModel.IsDisabled,
  };
};

export const filterParams = (key, key2, obj) => {
  const { [key]: omitted, [key2]: ommitted, ...rest } = obj;
  return rest;
};
