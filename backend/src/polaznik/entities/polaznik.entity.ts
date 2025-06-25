import { Korisnik } from "src/korisnik/entities/korisnik.entity";
import { MikrokredencijalPolaznik } from "src/mikrokredencijal-polaznik/entities/mikrokredencijal-polaznik.entity";
import { ChildEntity, Column, OneToMany } from "typeorm";

@ChildEntity()
export class Polaznik extends Korisnik{

    @Column()
    brojIndeksa:string;

    @OneToMany(()=>MikrokredencijalPolaznik, mp=>mp.mikrokredencijal)
    mikropolaznici:MikrokredencijalPolaznik[];
}
