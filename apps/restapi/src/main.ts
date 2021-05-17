import { NestFactory } from '@nestjs/core';
import { RestapiModule } from './restapi.module';
import { urlencoded, json } from 'express';

async function bootstrap() {
    const app = await NestFactory.create(RestapiModule);
    app.use(json({ limit: '50mb' }));
    app.use(urlencoded({ extended: true, limit: '50mb' }));
    await app.listen(3000);
    console.info('Test Place Restful API Service is listening');
}
bootstrap();
