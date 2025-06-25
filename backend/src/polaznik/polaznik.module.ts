import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Drzava } from 'src/drzava/entities/drzava.entity';
import { MikrokredencijalPolaznik } from 'src/mikrokredencijal-polaznik/entities/mikrokredencijal-polaznik.entity';
import { Polaznik } from './entities/polaznik.entity';
import { PolaznikController } from './polaznik.controller';
import { PolaznikService } from './polaznik.service';

@Module({
  imports: [TypeOrmModule.forFeature([Polaznik, Drzava, MikrokredencijalPolaznik])],
  controllers: [PolaznikController],
  providers: [PolaznikService],
})
export class PolaznikModule {}
