import { PartialType } from '@nestjs/mapped-types';
import { CreatePolaznikDto } from './create-polaznik.dto';

export class UpdatePolaznikDto extends PartialType(CreatePolaznikDto) {}
