import { Module } from '@nestjs/common';
import { Mikrokredencijal } from 'src/mikrokredencijal/entities/mikrokredencijal.entity';
import { OdgovornoLice } from 'src/odgovorno-lice/entities/odgovorno-louse.entity';
import { Polaznik } from 'src/polaznik/entities/polaznik.entity';
import { MikrokredencijalPolaznik } from './entities/mikrokredencijal-polaznik.entity';
import { MikrokredencijalPolaznikController } from './mikrokredencijal-polaznik.controller';
import { MikrokredencijalPolaznikService } from './mikrokredencijal-polaznik.service';

@Module({
  imports: [MikrokredencijalPolaznik, Mikrokredencijal, Polaznik, OdgovornoLice],
  controllers: [MikrokredencijalPolaznikController],
  providers: [MikrokredencijalPolaznikService],
})
export class MikrokredencijalPolaznikModule {}
