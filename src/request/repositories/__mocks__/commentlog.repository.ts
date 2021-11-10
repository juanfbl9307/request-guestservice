export const CommentLogRepository = jest.fn().mockReturnValue({
  create: jest.fn().mockResolvedValue({
    Id: 1,
    EntryDate: '2021-11-09T21:26:46.534Z',
    Comments: 'test comment',
    UserId: 1,
    RequestId: 1,
  }),
});
