import { Module } from '@nestjs/common';
import { DbServiceService } from './db-service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaceEntity } from '@app/db-service/entity/place.entity';

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
    providers: [DbServiceService],
    exports: [DbServiceService],
})
export class DbServiceModule {}
