import { HttpModule, Module } from '@nestjs/common';
import { TestClientController } from './test-client.controller';
import { TestClientService } from './test-client.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
    imports: [
        HttpModule.register({
            timeout: 30000,
            maxRedirects: 3,
        }),
        ClientsModule.register([
            {
                name: 'PLACE_PACKAGE',
                transport: Transport.GRPC,
                options: {
                    package: 'place',
                    url: 'localhost:50051',
                    protoPath: join(__dirname, './place.proto'),
                    maxSendMessageLength: 1024 * 1024 * 100,
                    maxReceiveMessageLength: 1024 * 1024 * 100,
                },
            },
        ]),
    ],
    controllers: [TestClientController],
    providers: [TestClientService],
})
export class TestClientModule {}
