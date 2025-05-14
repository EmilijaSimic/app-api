import { PartialType } from '@nestjs/mapped-types';
import { CreateVisokoskolskaUstanovumDto } from './create-visokoskolska-ustanovum.dto';

export class UpdateVisokoskolskaUstanovumDto extends PartialType(CreateVisokoskolskaUstanovumDto) {}
