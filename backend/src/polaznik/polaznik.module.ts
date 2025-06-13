import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Polaznik } from './entities/polaznik.entity';
import { PolaznikController } from './polaznik.controller';
import { PolaznikService } from './polaznik.service';

@Module({
  imports: [TypeOrmModule.forFeature([Polaznik])],
  controllers: [PolaznikController],
  providers: [PolaznikService],
})
export class PolaznikModule {}
