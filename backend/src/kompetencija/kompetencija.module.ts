import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Kompetencija } from './entities/kompetencija.entity';
import { KompetencijaController } from './kompetencija.controller';
import { KompetencijaService } from './kompetencija.service';

@Module({
  imports: [TypeOrmModule.forFeature([Kompetencija])],
  controllers: [KompetencijaController],
  providers: [KompetencijaService],
})
export class KompetencijaModule {}
