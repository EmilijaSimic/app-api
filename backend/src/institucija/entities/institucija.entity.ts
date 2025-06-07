import { Drzava } from 'src/drzava/entities/drzava.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  TableInheritance,
} from 'typeorm';

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'tipInstitucije' } })
export abstract class Institucija {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  naziv: string;

  @Column()
  kontakt: string;

  @ManyToOne(() => Drzava, (drzava) => drzava.institucije)
  drzava: Drzava;
}
