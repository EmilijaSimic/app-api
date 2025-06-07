import { PartialType } from '@nestjs/mapped-types';
import { CreateVisokoskolskaUstanovaDto } from './create-visokoskolska-ustanova.dto';

export class UpdateVisokoskolskaUstanovaDto extends PartialType(
  CreateVisokoskolskaUstanovaDto,
) {}
