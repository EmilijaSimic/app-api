import { Test, TestingModule } from '@nestjs/testing';
import { OdgovornoLiceService } from './odgovorno-lice.service';

describe('OdgovornoLiceService', () => {
  let service: OdgovornoLiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OdgovornoLiceService],
    }).compile();

    service = module.get<OdgovornoLiceService>(OdgovornoLiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
