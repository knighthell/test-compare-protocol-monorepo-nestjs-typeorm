import { Injectable } from '@nestjs/common';

@Injectable()
export class RestapiService {
    getHello(): string {
        return 'Hello World!';
    }
}
