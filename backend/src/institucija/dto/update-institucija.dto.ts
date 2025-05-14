import { PartialType } from '@nestjs/mapped-types';
import { CreateInstitucijaDto } from './create-institucija.dto';

export class UpdateInstitucijaDto extends PartialType(CreateInstitucijaDto) {}
