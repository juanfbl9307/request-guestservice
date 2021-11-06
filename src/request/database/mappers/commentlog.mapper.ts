export const commentLogMapper = (request, userEntryDate) => {
  return {
    EntryDate: userEntryDate,
    Comments: request.Comments,
    UserId: request.CreatorUserId,
    RequestId: request.Id,
  };
};
