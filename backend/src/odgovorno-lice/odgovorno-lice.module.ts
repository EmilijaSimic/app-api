import { Module } from '@nestjs/common';
import { OdgovornoLiceService } from './odgovorno-lice.service';
import { OdgovornoLiceController } from './odgovorno-lice.controller';

@Module({
  controllers: [OdgovornoLiceController],
  providers: [OdgovornoLiceService],
})
export class OdgovornoLiceModule {}
