import { HotelTest } from '../../test/constants/constants.test';

export const HotelRepository = jest.fn().mockReturnValue({
  getTimezone: jest.fn().mockImplementation((hotelId) => {
    if (hotelId != HotelTest.existingHotelId) return null;
    return 'test Timezone';
  }),
  getName: jest.fn().mockImplementation((hotelId) => {
    if (hotelId != HotelTest.existingHotelId) return null;
    return 'test HotelName';
  }),
});
