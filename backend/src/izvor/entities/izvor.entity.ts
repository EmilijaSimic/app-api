import { IzvorTip } from 'src/enums/izvor-tip.enum';
import { Mikrokredencijal } from 'src/mikrokredencijal/entities/mikrokredencijal.entity';
import { OdgovornoLice } from 'src/odgovorno-lice/entities/odgovorno-louse.entity';
import { Column, Entity, ManyToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @ManyToMany(()=>OdgovornoLice, odg=>odg.izvori)
  odgovornaLica:OdgovornoLice[];

  @OneToOne(() => Mikrokredencijal, mk => mk.izvor)
  mikrokredencijal: Mikrokredencijal;

}
