import { Korisnik } from "src/korisnik/entities/korisnik.entity";
import { ChildEntity, Column } from "typeorm";

@ChildEntity()
export class Polaznik extends Korisnik{

    @Column()
    brojIndeksa:string;
}
