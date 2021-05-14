import { Module } from '@nestjs/common';
import { RestapiController } from './restapi.controller';
import { PlaceModule } from '@app/place';

@Module({
    imports: [PlaceModule],
    controllers: [RestapiController],
    providers: [PlaceModule],
})
export class RestapiModule {}
