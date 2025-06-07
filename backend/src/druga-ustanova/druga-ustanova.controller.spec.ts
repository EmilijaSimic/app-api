import { Test, TestingModule } from '@nestjs/testing';
import { DrugaUstanovaController } from './druga-ustanova.controller';
import { DrugaUstanovaService } from './druga-ustanova.service';

describe('DrugaUstanovaController', () => {
  let controller: DrugaUstanovaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DrugaUstanovaController],
      providers: [DrugaUstanovaService],
    }).compile();

    controller = module.get<DrugaUstanovaController>(DrugaUstanovaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
