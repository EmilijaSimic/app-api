import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateKompetencijaDto } from './dto/create-kompetencija.dto';
import { UpdateKompetencijaDto } from './dto/update-kompetencija.dto';
import { Kompetencija } from './entities/kompetencija.entity';

@Injectable()
export class KompetencijaService {
  constructor(
    @InjectRepository(Kompetencija)
    private kompetencijaRepo: Repository<Kompetencija>,
  ) {}

  async create(createKompetencijaDto: CreateKompetencijaDto) {
    const kompetencija = this.kompetencijaRepo.create(createKompetencijaDto);
    /*  ne mora prvo create pa save, ali neka ga za svaki slucaj ako zatreba neka promena */
    return await this.kompetencijaRepo.save(kompetencija);
  }

  async findAll() {
    return await this.kompetencijaRepo.find();
  }

  async findOne(id: number) {
    return await this.kompetencijaRepo.findOneBy({ id });
  }

  async update(id: number, updateKompetencijaDto: UpdateKompetencijaDto) {
    const kompetencija = await this.kompetencijaRepo.findOneBy({ id });
    if (!kompetencija) {
      throw new Error('Nije pronadjena kompetencija');
    }
    Object.assign(kompetencija, updateKompetencijaDto);
    return await this.kompetencijaRepo.save(kompetencija);
  }

  async remove(id: number) {
    return await this.kompetencijaRepo.delete(id);
  }
}
