import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Institucija } from 'src/institucija/entities/institucija.entity';
import { Izvor } from 'src/izvor/entities/izvor.entity';
import { MikrokredencijalPolaznik } from 'src/mikrokredencijal-polaznik/entities/mikrokredencijal-polaznik.entity';
import { Preduslov } from 'src/preduslov/entities/preduslov.entity';
import { Mikrokredencijal } from './entities/mikrokredencijal.entity';
import { MikrokredencijalController } from './mikrokredencijal.controller';
import { MikrokredencijalService } from './mikrokredencijal.service';

@Module({
  imports: [TypeOrmModule.forFeature([Mikrokredencijal, Institucija, Izvor, Preduslov, MikrokredencijalPolaznik])],
  controllers: [MikrokredencijalController],
  providers: [MikrokredencijalService],
})
export class MikrokredencijalModule {}
