import { RoditeljTip } from 'src/enums/roditelj-tip.enum';
import { TipUstanove } from 'src/enums/tip-ustanove.enum';
import { Institucija } from 'src/institucija/entities/institucija.entity';
import { ChildEntity, Column } from 'typeorm';

@ChildEntity('visokoskolska')
export class VisokoskolskaUstanova extends Institucija {
  @Column()
  tipUstanove: TipUstanove;

  @Column()
  roditeljTip: RoditeljTip;
}
