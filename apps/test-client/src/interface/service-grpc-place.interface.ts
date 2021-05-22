import { Observable } from 'rxjs';
import { RequestReadPlacesInterface } from './request-read-places.interface';
import { ResponseReadPlacesInterface } from './response-read-places.interface';
import { RequestCreatePlacesInterface } from './request-create-places.interface';
import { ResponseCreatePlacesInterface } from './response-create-places.interface';

export interface ServiceGrpcPlaceInterface {
    readPlaces(data: RequestReadPlacesInterface): Observable<ResponseReadPlacesInterface>;
    createPlaces(data: RequestCreatePlacesInterface): Observable<ResponseCreatePlacesInterface>;
}
