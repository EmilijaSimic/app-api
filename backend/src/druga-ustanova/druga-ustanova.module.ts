import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Drzava } from 'src/drzava/entities/drzava.entity';
import { DrugaUstanovaController } from './druga-ustanova.controller';
import { DrugaUstanovaService } from './druga-ustanova.service';
import { DrugaUstanova } from './entities/druga-ustanova.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DrugaUstanova, Drzava])],
  controllers: [DrugaUstanovaController],
  providers: [DrugaUstanovaService],
})
export class DrugaUstanovaModule {}
