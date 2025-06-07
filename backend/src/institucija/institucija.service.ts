import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInstitucijaDto } from './dto/create-institucija.dto';
import { UpdateInstitucijaDto } from './dto/update-institucija.dto';
import { Institucija } from './entities/institucija.entity';

@Injectable()
export class InstitucijaService {
  constructor(
    @InjectRepository(Institucija)
    private institucijaRepo: Repository<Institucija>,
  ) {}

  create(createInstitucijaDto: CreateInstitucijaDto) {
    return;
  }

  async findAll() {
    return await this.institucijaRepo.find();
  }

  async findOne(id: number) {
    return await this.institucijaRepo.findOneBy({ id });
  }

  update(id: number, updateInstitucijaDto: UpdateInstitucijaDto) {
    return `This action updates a #${id} institucija`;
  }

  remove(id: number) {
    return `This action removes a #${id} institucija`;
  }
}
