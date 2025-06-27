import { Mikrokredencijal } from "src/mikrokredencijal/entities/mikrokredencijal.entity";
import { OdgovornoLice } from "src/odgovorno-lice/entities/odgovorno-louse.entity";
import { Polaznik } from "src/polaznik/entities/polaznik.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MikrokredencijalPolaznik {
    
    @PrimaryGeneratedColumn()
    id:number;

    @ManyToOne(() => Polaznik, polaznik => polaznik.mikropolaznici)
    polaznik: Polaznik;

    @ManyToOne(() => Mikrokredencijal, mk => mk.mikropolaznici)
    mikrokredencijal: Mikrokredencijal;

    @ManyToOne(() => OdgovornoLice, lice => lice.mikropolaznici)
    potpisao: OdgovornoLice;

    @Column()
    blokcejnZapis:string;
}
