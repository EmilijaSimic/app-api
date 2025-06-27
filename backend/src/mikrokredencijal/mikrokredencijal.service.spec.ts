import { Test, TestingModule } from '@nestjs/testing';
import { MikrokredencijalService } from './mikrokredencijal.service';

describe('MikrokredencijalService', () => {
  let service: MikrokredencijalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MikrokredencijalService],
    }).compile();

    service = module.get<MikrokredencijalService>(MikrokredencijalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
