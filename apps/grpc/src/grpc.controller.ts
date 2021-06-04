import { Controller, Get } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { PlaceService } from '@app/place';
import { RequestReadPlacesInterface } from './interface/request-read-places.interface';
import { ResponseReadPlacesInterface } from './interface/response-read-places.interface';
import { RequestCreatePlacesInterface } from './interface/request-create-places.interface';
import { ResponseCreatePlacesInterface } from './interface/response-create-places.interface';

@Controller()
export class GrpcController {
    constructor(private readonly placeService: PlaceService) {}

    @GrpcMethod('PlaceService', 'ReadPlaces')
    async readPlaces(request: RequestReadPlacesInterface): Promise<ResponseReadPlacesInterface> {
        console.log('Called gRPC : readPlaces');
        const [places, totalCount] = await this.placeService.findAllandCount();

        return { places, totalCount };
    }

    @GrpcMethod('PlaceService', 'CreatePlaces')
    async createPlaces(request: RequestCreatePlacesInterface): Promise<ResponseCreatePlacesInterface> {
        console.log('Called gRPC : createPlaces');
        const [places, totalCount] = await this.placeService.createAll(request.places);

        return { places, totalCount };
    }
}
