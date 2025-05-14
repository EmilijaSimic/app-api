import { PartialType } from '@nestjs/mapped-types';
import { CreateDrzavaDto } from './create-drzava.dto';

export class UpdateDrzavaDto extends PartialType(CreateDrzavaDto) {}
