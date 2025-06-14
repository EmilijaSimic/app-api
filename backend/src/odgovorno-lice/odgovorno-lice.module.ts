import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Drzava } from 'src/drzava/entities/drzava.entity';
import { OdgovornoLice } from './entities/odgovorno-louse.entity';
import { OdgovornoLiceController } from './odgovorno-lice.controller';
import { OdgovornoLiceService } from './odgovorno-lice.service';

@Module({
  imports: [TypeOrmModule.forFeature([OdgovornoLice, Drzava])],
  controllers: [OdgovornoLiceController],
  providers: [OdgovornoLiceService],
})
export class OdgovornoLiceModule {}
