import { Test, TestingModule } from '@nestjs/testing';
import { DrugaUstanovaService } from './druga-ustanova.service';

describe('DrugaUstanovaService', () => {
  let service: DrugaUstanovaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DrugaUstanovaService],
    }).compile();

    service = module.get<DrugaUstanovaService>(DrugaUstanovaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
