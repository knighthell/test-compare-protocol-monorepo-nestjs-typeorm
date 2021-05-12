import { Controller, Get } from '@nestjs/common';
import { GrpcService } from './grpc.service';

@Controller()
export class GrpcController {
  constructor(private readonly grpcService: GrpcService) {}

  @Get()
  getHello(): string {
    return this.grpcService.getHello();
  }
}
