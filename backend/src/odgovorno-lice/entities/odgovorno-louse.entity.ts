import { tipOdgLica } from "src/enums/tip-odgovornog-lica.enum";
import { Izvor } from "src/izvor/entities/izvor.entity";
import { Korisnik } from "src/korisnik/entities/korisnik.entity";
import { MikrokredencijalPolaznik } from "src/mikrokredencijal-polaznik/entities/mikrokredencijal-polaznik.entity";
import { ChildEntity, Column, JoinTable, ManyToMany, OneToMany } from "typeorm";


@ChildEntity()
export class OdgovornoLice extends Korisnik{

    @Column()
    tipOdgLica:tipOdgLica;

    @ManyToMany(()=>Izvor, izvor=>izvor.odgovornaLica)
    @JoinTable()
    izvori:Izvor[];

    @OneToMany(()=>MikrokredencijalPolaznik, mp=>mp.mikrokredencijal)
    mikropolaznici:MikrokredencijalPolaznik[];
}
