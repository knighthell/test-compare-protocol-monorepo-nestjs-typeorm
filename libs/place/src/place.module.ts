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
            username: 'root',
            password: 'root1234',
            database: 'test',
            entities: [PlaceEntity],
            synchronize: true,
        }),
    ],
    providers: [PlaceService],
    exports: [PlaceService, PlaceEntity],
})
export class PlaceModule {}
