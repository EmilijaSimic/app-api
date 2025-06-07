import { Institucija } from 'src/institucija/entities/institucija.entity';
import { ChildEntity, Column } from 'typeorm';

@ChildEntity('drugaUstanova')
export class DrugaUstanova extends Institucija {
  @Column()
  opis: string;
}
