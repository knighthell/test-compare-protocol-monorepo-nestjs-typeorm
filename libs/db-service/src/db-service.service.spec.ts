import { Test, TestingModule } from '@nestjs/testing';
import { DbServiceService } from './db-service.service';

describe('DbServiceService', () => {
  let service: DbServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbServiceService],
    }).compile();

    service = module.get<DbServiceService>(DbServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
