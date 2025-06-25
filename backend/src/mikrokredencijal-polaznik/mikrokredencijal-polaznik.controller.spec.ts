import { Test, TestingModule } from '@nestjs/testing';
import { MikrokredencijalPolaznikController } from './mikrokredencijal-polaznik.controller';
import { MikrokredencijalPolaznikService } from './mikrokredencijal-polaznik.service';

describe('MikrokredencijalPolaznikController', () => {
  let controller: MikrokredencijalPolaznikController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MikrokredencijalPolaznikController],
      providers: [MikrokredencijalPolaznikService],
    }).compile();

    controller = module.get<MikrokredencijalPolaznikController>(MikrokredencijalPolaznikController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
