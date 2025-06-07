import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateKorisnikDto } from './dto/create-korisnik.dto';
import { UpdateKorisnikDto } from './dto/update-korisnik.dto';
import { Korisnik } from './entities/korisnik.entity';

@Injectable()
export class KorisnikService {

  constructor(@InjectRepository(Korisnik) private readonly korisnikRepository:Repository<Korisnik>,){}

  create(createKorisnikDto: CreateKorisnikDto) {
    return this.korisnikRepository.find();
  }

  findAll() {
    return `This action returns all korisnik`;
  }

  findOne(id: number) {
    return `This action returns a #${id} korisnik`;
  }

  update(id: number, updateKorisnikDto: UpdateKorisnikDto) {
    return `This action updates a #${id} korisnik`;
  }

  remove(id: number) {
    return `This action removes a #${id} korisnik`;
  }
}
