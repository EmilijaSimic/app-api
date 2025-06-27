import { Test, TestingModule } from '@nestjs/testing';
import { PreduslovController } from './preduslov.controller';
import { PreduslovService } from './preduslov.service';

describe('PreduslovController', () => {
  let controller: PreduslovController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PreduslovController],
      providers: [PreduslovService],
    }).compile();

    controller = module.get<PreduslovController>(PreduslovController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
