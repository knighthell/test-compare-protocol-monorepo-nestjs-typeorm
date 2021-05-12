import { Injectable } from '@nestjs/common';

@Injectable()
export class GrpcService {
  getHello(): string {
    return 'Hello World!';
  }
}
