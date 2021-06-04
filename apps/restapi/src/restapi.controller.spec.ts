import { Test, TestingModule } from '@nestjs/testing';
import { RestapiController } from './restapi.controller';
import { RestapiService } from './restapi.service';

describe('RestapiController', () => {
    let restapiController: RestapiController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [RestapiController],
            providers: [RestapiService],
        }).compile();

        restapiController = app.get<RestapiController>(RestapiController);
    });

    describe('root', () => {
        it('should return "Hello World!"', () => {
            expect(restapiController.getHello()).toBe('Hello World!');
        });
    });
});
