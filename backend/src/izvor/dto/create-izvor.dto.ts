import { IzvorTip } from 'src/enums/izvor-tip.enum';

export class CreateIzvorDto {
  tip: IzvorTip;
  naziv: string;
  opis: string;
}
