import { PartialType } from '@nestjs/mapped-types';
import { CreateOdgovornoLiceDto } from './create-odgovorno-louse.dto';

export class UpdateOdgovornoLiceDto extends PartialType(CreateOdgovornoLiceDto) {}
