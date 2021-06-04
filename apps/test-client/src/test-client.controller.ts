import { Controller, Get } from '@nestjs/common';
import { TestClientService } from './test-client.service';

@Controller()
export class TestClientController {
    constructor(private readonly testClientService: TestClientService) {}

    @Get('restapi')
    async getPlaceByRestAPI(): Promise<{ totalCount: number; startTime: string; endTime: string; durationMilliSec: number }> {
        console.log('Called Test Client : getPlaceByRestAPI');

        const startTime = new Date();
        const { places, totalCount } = await this.testClientService.getPlacesByRestAPI();
        const endTime = new Date();

        const durationMilliSec = endTime.getTime() - startTime.getTime();

        return {
            totalCount,
            startTime: startTime.toISOString(),
            endTime: endTime.toISOString(),
            durationMilliSec,
        };
    }

    @Get('grpc')
    async getPlacesByGRPC(): Promise<{ totalCount: number; startTime: string; endTime: string; durationMilliSec: number }> {
        console.log('Called Test Client : getPlacesByGRPC');

        const startTime = new Date();
        const { places, totalCount } = await this.testClientService.getPlaceByGRPC();
        const endTime = new Date();

        const durationMilliSec = endTime.getTime() - startTime.getTime();

        return {
            totalCount,
            startTime: startTime.toISOString(),
            endTime: endTime.toISOString(),
            durationMilliSec,
        };
    }
}
