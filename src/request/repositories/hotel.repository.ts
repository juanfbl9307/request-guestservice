import { Inject, Injectable } from '@nestjs/common';
import { Constants } from '../constants/constants.request';
import { HotelModel } from '../database/models/hotel.model';

@Injectable()
export class HotelRepository {
  constructor(
    @Inject('HOTEL_REPOSITORY') private hotelModel: typeof HotelModel,
  ) {}

  async getTimezone(id: number): Promise<string> {
    try {
      const hotel = await this.hotelModel.findByPk(id);
      if (hotel === null) return Constants.DEFAULT_TIMEZONE;
      return hotel.TimeZone;
    } catch (error) {
      throw error;
    }
  }

  async getName(hotelId: number): Promise<string> {
    const hotelName = await this.hotelModel.findByPk(hotelId);
    return hotelName.Name;
  }
}
