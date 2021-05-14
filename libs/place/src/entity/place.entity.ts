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

    @Column('uuid')
    @IsUUID('4')
    createdBy: string;

    @CreateDateColumn()
    @IsDate()
    createdAt: Date;

    @Column('uuid')
    @IsUUID('4')
    updatedBy: string;

    @UpdateDateColumn()
    @IsDate()
    updatedAt: Date;

    @Column('uuid', { nullable: true })
    @IsUUID('4')
    deletedBy?: string;

    @DeleteDateColumn()
    @IsDate()
    deletedAt?: Date;
}
