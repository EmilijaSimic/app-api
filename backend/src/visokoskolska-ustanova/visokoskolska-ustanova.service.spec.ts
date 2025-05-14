import { Test, TestingModule } from '@nestjs/testing';
import { VisokoskolskaUstanovaService } from './visokoskolska-ustanova.service';

describe('VisokoskolskaUstanovaService', () => {
  let service: VisokoskolskaUstanovaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VisokoskolskaUstanovaService],
    }).compile();

    service = module.get<VisokoskolskaUstanovaService>(VisokoskolskaUstanovaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
