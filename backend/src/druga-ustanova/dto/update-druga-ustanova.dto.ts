import { PartialType } from '@nestjs/mapped-types';
import { CreateDrugaUstanovaDto } from './create-druga-ustanova.dto';

export class UpdateDrugaUstanovaDto extends PartialType(
  CreateDrugaUstanovaDto,
) {}
