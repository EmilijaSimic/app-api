import { Drzava } from 'src/drzava/entities/drzava.entity';
import { Mikrokredencijal } from 'src/mikrokredencijal/entities/mikrokredencijal.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
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

  @OneToMany(()=>Mikrokredencijal, mikrokredencijal => mikrokredencijal.izdavackoTelo)
  mikrokredencijali:Mikrokredencijal[];
}
