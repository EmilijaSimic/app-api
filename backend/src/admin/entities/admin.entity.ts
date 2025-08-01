import { Korisnik } from 'src/korisnik/entities/korisnik.entity';
import { ChildEntity } from 'typeorm';

@ChildEntity()
export class Admin extends Korisnik {}
