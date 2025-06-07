import { RoditeljTip } from 'src/enums/roditelj-tip.enum';
import { TipUstanove } from 'src/enums/tip-ustanove.enum';

export class CreateVisokoskolskaUstanovaDto {
  naziv: string;
  kontakt: string;
  drzavaId: number;
  tipUstanove: TipUstanove;
  roditeljTip: RoditeljTip;
}
