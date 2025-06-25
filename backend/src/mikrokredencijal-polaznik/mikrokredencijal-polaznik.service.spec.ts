import { Test, TestingModule } from '@nestjs/testing';
import { MikrokredencijalPolaznikService } from './mikrokredencijal-polaznik.service';

describe('MikrokredencijalPolaznikService', () => {
  let service: MikrokredencijalPolaznikService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MikrokredencijalPolaznikService],
    }).compile();

    service = module.get<MikrokredencijalPolaznikService>(MikrokredencijalPolaznikService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
