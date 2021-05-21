import { Test, TestingModule } from '@nestjs/testing';
import { TestClientController } from './test-client.controller';
import { TestClientService } from './test-client.service';

describe('TestClientController', () => {
    let testClientController: TestClientController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [TestClientController],
            providers: [TestClientService],
        }).compile();

        testClientController = app.get<TestClientController>(TestClientController);
    });

    describe('root', () => {
        it('should return "Hello World!"', () => {
            expect(testClientController.getHello()).toBe('Hello World!');
        });
    });
});
