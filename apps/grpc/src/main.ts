import { NestFactory } from '@nestjs/core';
import { GrpcModule } from './grpc.module';
import { join } from 'path';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(GrpcModule, {
        transport: Transport.GRPC,
        options: {
            url: '0.0.0.0:50051',
            package: 'place',
            protoPath: join(__dirname, './place.proto'),
            maxSendMessageLength: 1024 * 1024 * 100,
            maxReceiveMessageLength: 1024 * 1024 * 100,
        },
    });
    await app.listen(() => console.log('Test Place gRPC Service is listening'));
}
bootstrap();
