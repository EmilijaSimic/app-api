import { Test, TestingModule } from '@nestjs/testing';
import { IzvorService } from './izvor.service';

describe('IzvorService', () => {
  let service: IzvorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IzvorService],
    }).compile();

    service = module.get<IzvorService>(IzvorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
