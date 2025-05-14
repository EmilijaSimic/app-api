import { Test, TestingModule } from '@nestjs/testing';
import { OdgovornoLiceController } from './odgovorno-lice.controller';
import { OdgovornoLiceService } from './odgovorno-lice.service';

describe('OdgovornoLiceController', () => {
  let controller: OdgovornoLiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OdgovornoLiceController],
      providers: [OdgovornoLiceService],
    }).compile();

    controller = module.get<OdgovornoLiceController>(OdgovornoLiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
