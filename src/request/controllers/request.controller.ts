import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseIntPipe,
  Delete,
  Put,
} from '@nestjs/common';
import { RequestService } from '../services/request.service';
import { RequestCreateDto } from '../dto/request/create-request.dto';
import { UpdateRequestDto } from '../dto/request/update-request.dto';
import { SearchRequestDto } from '../dto/request/search-request.dto';
import { RequestResponseDto } from '../dto/request/response-request.dto';
import { RequestCreatedResponse } from '../dto/request/request.create.response.dto';
import { CloseRequestDto } from '../dto/request/close.request.dto';
import { ConfirmRequestDto } from '../dto/request/confirm.request.dto';

@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Post()
  create(
    @Body() createRequestDto: RequestCreateDto,
  ): Promise<RequestCreatedResponse> {
    return this.requestService.create(createRequestDto);
  }

  //!NO SIRVE
  @Get('listall:limit')
  findAll(
    @Param('limit', ParseIntPipe) limit = 10,
  ): Promise<RequestResponseDto[]> {
    return this.requestService.findAll(limit);
  }

  //! SET PAGINATION AND OFFSET
  @Get('search')
  find(@Query() params: SearchRequestDto) {
    return this.requestService.find({ ...params });
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.requestService.findOne(+id);
  }

  @Put()
  update(@Body() updateRequestDto: UpdateRequestDto) {
    return this.requestService.updateById(
      updateRequestDto.Id,
      updateRequestDto,
    );
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.requestService.disable(+id);
  }

  //! CONFIRM AND CLOSE

  @Put('close')
  close(@Query() params: CloseRequestDto) {
    return this.requestService.close({ ...params });
  }

  @Put('confirm')
  confirm(@Query() params: ConfirmRequestDto) {
    return this.requestService.confirm({ ...params });
  }
}
