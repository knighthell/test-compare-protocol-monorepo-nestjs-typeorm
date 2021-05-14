import { Module } from '@nestjs/common';
import { RestapiController } from './restapi.controller';
import { PlaceModule, PlaceService } from '@app/place';

@Module({
    imports: [PlaceModule],
    controllers: [RestapiController],
    providers: [PlaceService],
})
export class RestapiModule {}
