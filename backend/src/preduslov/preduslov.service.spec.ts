import { Test, TestingModule } from '@nestjs/testing';
import { PreduslovService } from './preduslov.service';

describe('PreduslovService', () => {
  let service: PreduslovService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PreduslovService],
    }).compile();

    service = module.get<PreduslovService>(PreduslovService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
