import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PlaceEntity } from '@app/db-service/entity/place.entity';

@Injectable()
export class DbServiceService {
    constructor(@InjectRepository(PlaceEntity) private placeRepository: Repository<PlaceEntity>) {}

    async findAllandCount(): Promise<[PlaceEntity[], number]> {
        return this.placeRepository.findAndCount();
    }

    async createAll(places: PlaceEntity[]): Promise<[PlaceEntity[], number]> {
        const createdPlaces = await this.placeRepository.save(places, { reload: true });
        return [createdPlaces, places.length];
    }
}
