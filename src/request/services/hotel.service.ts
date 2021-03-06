import { HotelRepository } from '../repositories/hotel.repository';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class HotelService {
  constructor(private readonly hotelRepository: HotelRepository) {}

  async getTimezone(hotelId: number): Promise<string> {
    const timezone = await this.hotelRepository.getTimezone(hotelId);
    if (timezone === null) throw new NotFoundException('Timezone not found');
    return timezone;
  }
  async getName(hotelId: number): Promise<string> {
    const hotelName = await this.hotelRepository.getName(hotelId);
    if (hotelName === null)
      throw new NotFoundException(`Name of the Hotel not found`);
    return hotelName;
  }
}
