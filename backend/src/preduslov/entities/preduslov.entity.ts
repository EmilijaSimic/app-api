import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Preduslov {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  opis: string;

  @Column()
  ispunjen: boolean;

  // @OneToOne(() => Mikrokredencijal, mk => mk.preduslov)
  // mikrokredencijal: Mikrokredencijal;
}
