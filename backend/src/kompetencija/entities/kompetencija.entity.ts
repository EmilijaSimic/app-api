import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Kompetencija {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  naziv: string;

  @Column()
  opis: string;
}
