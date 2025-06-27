import { PartialType } from '@nestjs/mapped-types';
import { CreateKompetencijaDto } from './create-kompetencija.dto';

export class UpdateKompetencijaDto extends PartialType(CreateKompetencijaDto) {
  naziv?: string;
  opis?: string;
}
