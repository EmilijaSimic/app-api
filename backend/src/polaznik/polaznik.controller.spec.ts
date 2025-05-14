import { Test, TestingModule } from '@nestjs/testing';
import { PolaznikController } from './polaznik.controller';
import { PolaznikService } from './polaznik.service';

describe('PolaznikController', () => {
  let controller: PolaznikController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PolaznikController],
      providers: [PolaznikService],
    }).compile();

    controller = module.get<PolaznikController>(PolaznikController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
