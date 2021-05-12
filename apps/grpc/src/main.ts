import { NestFactory } from '@nestjs/core';
import { GrpcModule } from './grpc.module';

async function bootstrap() {
  const app = await NestFactory.create(GrpcModule);
  await app.listen(3000);
}
bootstrap();
