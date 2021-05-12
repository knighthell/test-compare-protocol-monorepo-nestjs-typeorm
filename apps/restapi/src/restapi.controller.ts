import { Controller, Get } from '@nestjs/common';
import { RestapiService } from './restapi.service';

@Controller()
export class RestapiController {
    constructor(private readonly restapiService: RestapiService) {}

    @Get()
    getHello(): string {
        return this.restapiService.getHello();
    }
}
