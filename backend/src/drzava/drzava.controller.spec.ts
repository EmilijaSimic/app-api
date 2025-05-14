import { Test, TestingModule } from '@nestjs/testing';
import { DrzavaController } from './drzava.controller';
import { DrzavaService } from './drzava.service';

describe('DrzavaController', () => {
  let controller: DrzavaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DrzavaController],
      providers: [DrzavaService],
    }).compile();

    controller = module.get<DrzavaController>(DrzavaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
