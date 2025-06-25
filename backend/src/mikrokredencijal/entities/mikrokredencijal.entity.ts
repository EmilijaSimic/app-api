import { VrstaProcene } from "src/enums/vrsta-procene.enum";
import { Institucija } from "src/institucija/entities/institucija.entity";
import { Izvor } from "src/izvor/entities/izvor.entity";
import { MikrokredencijalPolaznik } from "src/mikrokredencijal-polaznik/entities/mikrokredencijal-polaznik.entity";
import { Preduslov } from "src/preduslov/entities/preduslov.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Mikrokredencijal {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    naziv:string;

    @ManyToOne(()=>Institucija, institucija =>institucija.mikrokredencijali)
    izdavackoTelo:Institucija;

    @OneToOne(() => Izvor, { cascade: true }) 
    @JoinColumn()
    izvor: Izvor;

    @Column({type:'date'})
    datumIzdavanja:Date;

    @Column()
    ishodiUcenja:string;

    @Column()
    ESPB:number;

    @Column()
    nivo:string;

    @Column()
    vrstaProcene:VrstaProcene;

    @Column()
    formaParticipacije:string;

    @Column()
    tipOsiguranjaKvaliteta:string;

    @OneToOne(() => Preduslov, preduslov => preduslov.mikrokredencijal, { cascade: true })
    @JoinColumn()
    preduslov: Preduslov;

    @Column()
    supervizijaProcene:string;
    
    @Column()
    ostvarenaOcena:number;

    @Column()
    opcijeIntegracije:string;

    @Column()
    dodatneInformacije:string;

    @Column()
    trajanje:string;

    @Column()
    odrzavanje:string;

    @OneToMany(()=>MikrokredencijalPolaznik, mp=>mp.mikrokredencijal)
    mikropolaznici:MikrokredencijalPolaznik[];

}
