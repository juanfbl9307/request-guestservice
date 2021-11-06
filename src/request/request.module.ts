import { Module } from '@nestjs/common';
import { RequestController } from './controllers/request.controller';
import { DatabaseModule } from 'src/request/database/database.module';
import { requestModelProvider } from './database/provider/request.model.provider';
import { requestServiceProvider } from './services/provider/service.provider';
import { requestRepositoryProvider } from './repositories/provider/repository.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [RequestController],
  providers: [
    ...requestServiceProvider,
    ...requestModelProvider,
    ...requestRepositoryProvider,
  ],
})
export class RequestModule {}
