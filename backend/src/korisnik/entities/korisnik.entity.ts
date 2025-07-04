import { Drzava } from "src/drzava/entities/drzava.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, TableInheritance } from "typeorm";

@Entity()
@TableInheritance({column: {type:'varchar', name:'tipKorisnika'}})
export class Korisnik {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    email:string;

    @Column()
    lozinka:string;

    @Column()
    ime:string;

    @Column()
    prezime:string;
    
    @ManyToOne(() => Drzava, (drzava) => drzava.korisnici)
    drzava:Drzava;

}