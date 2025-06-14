import { PartialType } from '@nestjs/mapped-types';
import { IzvorTip } from 'src/enums/izvor-tip.enum';
import { CreateIzvorDto } from './create-izvor.dto';

export class UpdateIzvorDto extends PartialType(CreateIzvorDto) {
  tip?: IzvorTip;
  naziv?: string;
  opis?: string;
}
