import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlaceEntity } from '@app/place/entity/place.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PlaceService {
    constructor(@InjectRepository(PlaceEntity) private placeRepository: Repository<PlaceEntity>) {}

    async findAllandCount(): Promise<[PlaceEntity[], number]> {
        return this.placeRepository.findAndCount();
    }

    async createAll(places: PlaceEntity[]): Promise<[PlaceEntity[], number]> {
        const createdPlaces = await this.placeRepository.save(places, { reload: true });
        return [createdPlaces, places.length];
    }
}
