import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Point } from 'geojson';
import { IsUUID } from 'class-validator';
import { ObjectType } from '@nestjs/graphql';

@Entity('place')
export class PlaceEntity {
    @PrimaryGeneratedColumn('uuid')
    @IsUUID('4')
    id?: string;

    @Column({ type: 'varchar', length: 200 })
    name: string;

    @Column('geometry', {
        spatialFeatureType: 'Point',
        srid: 4326,
    })
    geoPoint: Point;
}
