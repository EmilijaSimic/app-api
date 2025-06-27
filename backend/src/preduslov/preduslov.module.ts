import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Preduslov } from './entities/preduslov.entity';
import { PreduslovController } from './preduslov.controller';
import { PreduslovService } from './preduslov.service';

@Module({
  imports: [TypeOrmModule.forFeature([Preduslov])],
  controllers: [PreduslovController],
  providers: [PreduslovService],
})
export class PreduslovModule {}
