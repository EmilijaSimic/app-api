import { IzvorTip } from 'src/enums/izvor-tip.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Izvor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tip: IzvorTip;

  @Column()
  naziv: string;

  @Column()
  opis: string;
}
