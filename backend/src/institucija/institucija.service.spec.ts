import { Test, TestingModule } from '@nestjs/testing';
import { InstitucijaService } from './institucija.service';

describe('InstitucijaService', () => {
  let service: InstitucijaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstitucijaService],
    }).compile();

    service = module.get<InstitucijaService>(InstitucijaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
