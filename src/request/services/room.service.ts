import { Injectable, NotFoundException } from '@nestjs/common';
import { ResponseRoomDto } from '../dto/room/response-room.dto';
import { RoomRepository } from '../repositories/room.repository';

@Injectable()
export class RoomService {
  constructor(private readonly roomRepository: RoomRepository) {}

  async getRoom(HotelId: number, RoomNumber: string): Promise<ResponseRoomDto> {
    try {
      const room = await this.roomRepository.getRoom(HotelId, RoomNumber);
      if (!room) throw new NotFoundException(`Room ${RoomNumber} not found`);
      return room;
    } catch (err) {
      throw err;
    }
  }
}
