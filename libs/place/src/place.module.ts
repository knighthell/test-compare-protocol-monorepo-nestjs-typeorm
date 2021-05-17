import { Module } from '@nestjs/common';
import { PlaceService } from './place.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaceEntity } from '@app/place/entity/place.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'place',
            password: 'place1234!!',
            database: 'place',
            entities: [PlaceEntity],
            synchronize: true,
        }),
        TypeOrmModule.forFeature([PlaceEntity]),
    ],
    providers: [PlaceService],
    exports: [PlaceService, TypeOrmModule.forFeature([PlaceEntity])],
})
export class PlaceModule {}
