import { tipOdgLica } from "src/enums/tip-odgovornog-lica.enum";

export class CreateOdgovornoLiceDto {
    email: string;
    lozinka: string;
    ime: string;
    prezime: string;
    tipOdgLica: tipOdgLica;
    drzavaID: number;
    izvoriId: number[];
}
