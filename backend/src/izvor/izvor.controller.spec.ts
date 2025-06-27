import { Test, TestingModule } from '@nestjs/testing';
import { IzvorController } from './izvor.controller';
import { IzvorService } from './izvor.service';

describe('IzvorController', () => {
  let controller: IzvorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IzvorController],
      providers: [IzvorService],
    }).compile();

    controller = module.get<IzvorController>(IzvorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
