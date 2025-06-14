import { Test, TestingModule } from '@nestjs/testing';
import { KompetencijaController } from './kompetencija.controller';
import { KompetencijaService } from './kompetencija.service';

describe('KompetencijaController', () => {
  let controller: KompetencijaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KompetencijaController],
      providers: [KompetencijaService],
    }).compile();

    controller = module.get<KompetencijaController>(KompetencijaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
