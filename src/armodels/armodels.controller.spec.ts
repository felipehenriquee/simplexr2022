import { Test, TestingModule } from '@nestjs/testing';
import { ArmodelsController } from './armodels.controller';
import { ArmodelsService } from './armodels.service';

describe('ArmodelsController', () => {
  let controller: ArmodelsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArmodelsController],
      providers: [ArmodelsService],
    }).compile();

    controller = module.get<ArmodelsController>(ArmodelsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
