import { Module } from '@nestjs/common';
import { DbServiceService } from './db-service.service';

@Module({
  providers: [DbServiceService],
  exports: [DbServiceService],
})
export class DbServiceModule {}
