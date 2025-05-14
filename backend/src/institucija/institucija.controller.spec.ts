import { Test, TestingModule } from '@nestjs/testing';
import { InstitucijaController } from './institucija.controller';
import { InstitucijaService } from './institucija.service';

describe('InstitucijaController', () => {
  let controller: InstitucijaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstitucijaController],
      providers: [InstitucijaService],
    }).compile();

    controller = module.get<InstitucijaController>(InstitucijaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
