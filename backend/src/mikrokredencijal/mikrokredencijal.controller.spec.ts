import { Test, TestingModule } from '@nestjs/testing';
import { MikrokredencijalController } from './mikrokredencijal.controller';
import { MikrokredencijalService } from './mikrokredencijal.service';

describe('MikrokredencijalController', () => {
  let controller: MikrokredencijalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MikrokredencijalController],
      providers: [MikrokredencijalService],
    }).compile();

    controller = module.get<MikrokredencijalController>(MikrokredencijalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
