import { Korisnik } from "src/korisnik/entities/korisnik.entity";
import { ChildEntity, Column } from "typeorm";


@ChildEntity()
export class OdgovornoLice extends Korisnik{

    @Column()
    tipOdgLica:number;
}
