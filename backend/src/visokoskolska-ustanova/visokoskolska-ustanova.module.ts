import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Drzava } from 'src/drzava/entities/drzava.entity';
import { VisokoskolskaUstanova } from './entities/visokoskolska-ustanova.entity';
import { VisokoskolskaUstanovaController } from './visokoskolska-ustanova.controller';
import { VisokoskolskaUstanovaService } from './visokoskolska-ustanova.service';

@Module({
  imports: [TypeOrmModule.forFeature([VisokoskolskaUstanova, Drzava])],
  controllers: [VisokoskolskaUstanovaController],
  providers: [VisokoskolskaUstanovaService],
})
export class VisokoskolskaUstanovaModule {}
