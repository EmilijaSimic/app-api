import { Module } from '@nestjs/common';
import { InstitucijaService } from './institucija.service';
import { InstitucijaController } from './institucija.controller';

@Module({
  controllers: [InstitucijaController],
  providers: [InstitucijaService],
})
export class InstitucijaModule {}
