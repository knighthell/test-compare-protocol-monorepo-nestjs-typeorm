import { PlaceEntity } from '@app/place/entity/place.entity';

export interface ResponseCreatePlacesInterface {
    totalCount: number;
    places: PlaceEntity[];
}
