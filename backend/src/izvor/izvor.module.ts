import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Izvor } from './entities/izvor.entity';
import { IzvorController } from './izvor.controller';
import { IzvorService } from './izvor.service';

@Module({
  imports: [TypeOrmModule.forFeature([Izvor])],
  controllers: [IzvorController],
  providers: [IzvorService],
})
export class IzvorModule {}
