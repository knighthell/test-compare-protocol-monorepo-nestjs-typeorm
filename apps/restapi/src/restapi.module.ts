import { Module } from '@nestjs/common';
import { RestapiController } from './restapi.controller';
import { RestapiService } from './restapi.service';

@Module({
  imports: [],
  controllers: [RestapiController],
  providers: [RestapiService],
})
export class RestapiModule {}
