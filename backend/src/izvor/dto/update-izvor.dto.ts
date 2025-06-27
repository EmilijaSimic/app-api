import { PartialType } from '@nestjs/mapped-types';
import { CreateIzvorDto } from './create-izvor.dto';

export class UpdateIzvorDto extends PartialType(CreateIzvorDto) {
}
