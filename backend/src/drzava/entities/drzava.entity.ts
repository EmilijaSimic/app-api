import { Korisnik } from "src/korisnik/entities/korisnik.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Drzava {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    naziv:string;

    @OneToMany(() => Korisnik, (korisnik) => korisnik.drzava)
    korisnici:Korisnik[];
}
