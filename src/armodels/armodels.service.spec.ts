import { Test, TestingModule } from '@nestjs/testing';
import { ArmodelsService } from './armodels.service';

describe('ArmodelsService', () => {
  let service: ArmodelsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArmodelsService],
    }).compile();

    service = module.get<ArmodelsService>(ArmodelsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
