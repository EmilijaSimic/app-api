import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DrzavaController } from './drzava.controller';
import { DrzavaService } from './drzava.service';
import { Drzava } from './entities/drzava.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Drzava])],
  controllers: [DrzavaController],
  providers: [DrzavaService],
})
export class DrzavaModule {}
