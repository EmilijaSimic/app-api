import { PartialType } from '@nestjs/mapped-types';
import { CreateMikrokredencijalDto } from './create-mikrokredencijal.dto';

export class UpdateMikrokredencijalDto extends PartialType(CreateMikrokredencijalDto) {}
