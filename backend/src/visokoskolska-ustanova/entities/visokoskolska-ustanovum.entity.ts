import { Institucija } from 'src/institucija/entities/institucija.entity';
import { ChildEntity } from 'typeorm';

@ChildEntity()
export class VisokoskolskaUstanovum extends Institucija {}
