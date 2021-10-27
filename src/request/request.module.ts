import { Module } from '@nestjs/common';
import { RequestService } from './services/request.service';
import { RequestController } from './controllers/request.controller';
import { RequestRepository } from './repositories/request.repository';
import { DatabaseModule } from 'src/request/database/database.module';
import { requestProvider } from './database/provider/request.model.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [RequestController],
  providers: [RequestService, RequestRepository, ...requestProvider],
})
export class RequestModule {}
