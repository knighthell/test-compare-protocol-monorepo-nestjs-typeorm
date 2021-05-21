import { NestFactory } from '@nestjs/core';
import { TestClientModule } from './test-client.module';

async function bootstrap() {
    const app = await NestFactory.create(TestClientModule);
    await app.listen(3000);
}
bootstrap();
