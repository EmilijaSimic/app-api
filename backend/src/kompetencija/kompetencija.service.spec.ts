import { Test, TestingModule } from '@nestjs/testing';
import { KompetencijaService } from './kompetencija.service';

describe('KompetencijaService', () => {
  let service: KompetencijaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KompetencijaService],
    }).compile();

    service = module.get<KompetencijaService>(KompetencijaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
