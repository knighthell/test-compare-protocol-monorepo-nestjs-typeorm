import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Point } from 'geojson';
import { IsDate, IsUUID } from 'class-validator';

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
