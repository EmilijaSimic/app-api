import { Test, TestingModule } from '@nestjs/testing';
import { PolaznikService } from './polaznik.service';

describe('PolaznikService', () => {
  let service: PolaznikService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PolaznikService],
    }).compile();

    service = module.get<PolaznikService>(PolaznikService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
