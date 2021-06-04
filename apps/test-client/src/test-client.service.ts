import { HttpService, Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { PlaceEntity } from '@app/place/entity/place.entity';
import { ClientGrpc } from '@nestjs/microservices';
import { ServiceGrpcPlaceInterface } from './interface/service-grpc-place.interface';

@Injectable()
export class TestClientService implements OnModuleInit {
    private placeGrpcService: ServiceGrpcPlaceInterface;

    constructor(@Inject('PLACE_PACKAGE') private placeGrpcClient: ClientGrpc, private httpService: HttpService) {}

    onModuleInit() {
        this.placeGrpcService = this.placeGrpcClient.getService<ServiceGrpcPlaceInterface>('PlaceService');
    }

    async getPlacesByRestAPI(): Promise<{ places: PlaceEntity[]; totalCount: number }> {
        const response = await this.httpService.get<{ places: PlaceEntity[]; totalCount: number }>('http://localhost:3000/').toPromise();

        return response.data;
    }

    async getPlaceByGRPC(): Promise<{ places: PlaceEntity[]; totalCount: number }> {
        const response = await this.placeGrpcService.readPlaces({ keyword: '' }).toPromise();

        return response;
    }
}
