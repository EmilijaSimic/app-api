import { Test, TestingModule } from '@nestjs/testing';
import { VisokoskolskaUstanovaController } from './visokoskolska-ustanova.controller';
import { VisokoskolskaUstanovaService } from './visokoskolska-ustanova.service';

describe('VisokoskolskaUstanovaController', () => {
  let controller: VisokoskolskaUstanovaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VisokoskolskaUstanovaController],
      providers: [VisokoskolskaUstanovaService],
    }).compile();

    controller = module.get<VisokoskolskaUstanovaController>(VisokoskolskaUstanovaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
