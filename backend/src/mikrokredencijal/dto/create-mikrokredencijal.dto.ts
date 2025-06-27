import { VrstaProcene } from "src/enums/vrsta-procene.enum";

export class CreateMikrokredencijalDto {
    naziv:string;
    izdavackoTeloId:number;
    izvorId:number;
    datumIzdavanja:Date;
    ishodiUcenja:string;
    ESPB:number;
    nivo:string;
    vrstaProcene:VrstaProcene;
    formaParticipacije:string;
    tipOsiguranjaKvaliteta:string;
    preduslovId: number;
    supervizijaProcene:string;
    ostvarenaOcena:number;
    opcijeIntegracije:string;
    dodatneInformacije:string;
    trajanje:string;
    odrzavanje:string;
}
