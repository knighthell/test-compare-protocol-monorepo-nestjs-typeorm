import { Module } from '@nestjs/common';
import { GrpcController } from './grpc.controller';
import { PlaceModule, PlaceService } from '@app/place';

@Module({
    imports: [PlaceModule],
    controllers: [GrpcController],
    providers: [PlaceService],
})
export class GrpcModule {}
