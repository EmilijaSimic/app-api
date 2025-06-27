import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mikrokredencijal } from 'src/mikrokredencijal/entities/mikrokredencijal.entity';
import { OdgovornoLice } from 'src/odgovorno-lice/entities/odgovorno-louse.entity';
import { Izvor } from './entities/izvor.entity';
import { IzvorController } from './izvor.controller';
import { IzvorService } from './izvor.service';

@Module({
  imports: [TypeOrmModule.forFeature([Izvor, OdgovornoLice, Mikrokredencijal])],
  controllers: [IzvorController],
  providers: [IzvorService],
})
export class IzvorModule {}
