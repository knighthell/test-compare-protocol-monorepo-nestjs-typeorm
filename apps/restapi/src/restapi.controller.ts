import { Body, Controller, Get, Post } from '@nestjs/common';
import { PlaceService } from '@app/place';
import { PlaceEntity } from '@app/place/entity/place.entity';

@Controller()
export class RestapiController {
    constructor(private readonly placeService: PlaceService) {}

    @Get()
    async findALlAndCount(): Promise<{ places: PlaceEntity[]; totalCount: number }> {
        const [places, totalCount] = await this.placeService.findAllandCount();

        return { places, totalCount };
    }

    @Post()
    async createPlaceAll(@Body() creatablePlaces: PlaceEntity[]): Promise<{ places: PlaceEntity[]; totalCount: number }> {
        const [places, totalCount] = await this.placeService.createAll(creatablePlaces);

        return { places, totalCount };
    }
}
