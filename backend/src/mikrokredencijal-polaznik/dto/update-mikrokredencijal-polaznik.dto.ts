import { PartialType } from '@nestjs/mapped-types';
import { CreateMikrokredencijalPolaznikDto } from './create-mikrokredencijal-polaznik.dto';

export class UpdateMikrokredencijalPolaznikDto extends PartialType(CreateMikrokredencijalPolaznikDto) {}
