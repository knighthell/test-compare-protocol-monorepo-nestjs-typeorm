import { PlaceEntity } from '@app/place/entity/place.entity';

export interface ResponseReadPlacesInterface {
    totalCount: number;
    places: PlaceEntity[];
}
