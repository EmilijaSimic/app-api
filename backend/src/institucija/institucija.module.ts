import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Institucija } from './entities/institucija.entity';
import { InstitucijaController } from './institucija.controller';
import { InstitucijaService } from './institucija.service';

@Module({
  imports: [TypeOrmModule.forFeature([Institucija])],
  controllers: [InstitucijaController],
  providers: [InstitucijaService],
})
export class InstitucijaModule {}
