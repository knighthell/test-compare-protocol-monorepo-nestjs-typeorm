import { Test, TestingModule } from '@nestjs/testing';
import { GrpcController } from './grpc.controller';
import { GrpcService } from './grpc.service';

describe('GrpcController', () => {
  let grpcController: GrpcController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GrpcController],
      providers: [GrpcService],
    }).compile();

    grpcController = app.get<GrpcController>(GrpcController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(grpcController.getHello()).toBe('Hello World!');
    });
  });
});
