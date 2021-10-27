import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { RequestService } from '../services/request.service';
import { CreateRequestDto } from '../dto/create-request.dto';
import { UpdateRequestDto } from '../dto/update-request.dto';
import { Request } from 'express';

@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Post()
  create(@Body() createRequestDto: CreateRequestDto) {
    return this.requestService.create(createRequestDto);
  }

  @Get()
  findAll(@Param('limit') limit: number) {
    return this.requestService.findAll(limit);
  }

  @Get('search')
  find(@Req() req: Request) {
    const searchParams = req.query;
    return this.requestService.find(searchParams);
  }

  @Get('hotel/:id')
  findOne(@Param('id') id: number) {
    return this.requestService.findOne(id);
  }

  @Patch('byid:id')
  update(@Param('id') id: string, @Body() updateRequestDto: UpdateRequestDto) {
    return this.requestService.update(+id, updateRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.requestService.remove(+id);
  }
}
