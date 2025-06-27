import { PartialType } from '@nestjs/mapped-types';
import { CreatePreduslovDto } from './create-preduslov.dto';

export class UpdatePreduslovDto extends PartialType(CreatePreduslovDto) {}
