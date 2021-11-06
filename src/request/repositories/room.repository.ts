import { Inject, Injectable } from '@nestjs/common';
import { mapRoomKeys } from '../database/mappers/room.mapper';
import { RoomModel } from '../database/models/room.model';
import { ResponseRoomDto } from '../dto/room/response-room.dto';

@Injectable()
export class RoomRepository {
  constructor(@Inject('ROOM_REPOSITORY') private roomModel: typeof RoomModel) {}

  async getRoom(HotelId: number, RoomNumber: string): Promise<ResponseRoomDto> {
    try {
      const room = await this.roomModel.findOne({
        where: { RoomNumber: RoomNumber, HotelId: HotelId },
      });
      if (room === null) return null;
      const roomMapped = mapRoomKeys(room);
      return roomMapped;
    } catch (error) {
      throw error;
    }
  }
}
