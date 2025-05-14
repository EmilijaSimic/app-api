import { Module } from '@nestjs/common';
import { PolaznikService } from './polaznik.service';
import { PolaznikController } from './polaznik.controller';

@Module({
  controllers: [PolaznikController],
  providers: [PolaznikService],
})
export class PolaznikModule {}
