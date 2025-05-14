import { Module } from '@nestjs/common';
import { VisokoskolskaUstanovaService } from './visokoskolska-ustanova.service';
import { VisokoskolskaUstanovaController } from './visokoskolska-ustanova.controller';

@Module({
  controllers: [VisokoskolskaUstanovaController],
  providers: [VisokoskolskaUstanovaService],
})
export class VisokoskolskaUstanovaModule {}
