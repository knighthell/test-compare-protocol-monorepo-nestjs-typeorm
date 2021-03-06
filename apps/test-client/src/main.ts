import { NestFactory } from '@nestjs/core';
import { TestClientModule } from './test-client.module';
import { urlencoded, json } from 'express';

async function bootstrap() {
    const app = await NestFactory.create(TestClientModule);
    app.use(json({ limit: '50mb' }));
    app.use(urlencoded({ extended: true, limit: '50mb' }));
    await app.listen(3001);
    console.info('Test gRPC & Restful API Service is listening');
}
bootstrap();
