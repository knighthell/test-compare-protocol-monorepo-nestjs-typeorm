import { NestFactory } from '@nestjs/core';
import { RestapiModule } from './restapi.module';

async function bootstrap() {
    const app = await NestFactory.create(RestapiModule);
    await app.listen(3000);
}
bootstrap();
