import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Point } from 'geojson';
import { IsUUID } from 'class-validator';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity('place')
export class PlaceEntity {
    @PrimaryGeneratedColumn('uuid')
    @Field({ nullable: true })
    @IsUUID('4')
    id?: string;

    @Column({ type: 'varchar', length: 200 })
    @Field({ nullable: false })
    name: string;

    @Column('geometry', {
        spatialFeatureType: 'Point',
        srid: 4326,
    })
    @Field((type) => Point)
    geoPoint: Point;
}
