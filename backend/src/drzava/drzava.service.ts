import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDrzavaDto } from './dto/create-drzava.dto';
import { UpdateDrzavaDto } from './dto/update-drzava.dto';
import { Drzava } from './entities/drzava.entity';

@Injectable()
export class DrzavaService {
  constructor(
    @InjectRepository(Drzava) private drzavaRepo: Repository<Drzava>,
  ) {}
  create(createDrzavaDto: CreateDrzavaDto) {
    return 'This action adds a new drzava';
  }

  async findAll() {
    return await this.drzavaRepo.find();
  }

  async findOne(id: number) {
    return await this.drzavaRepo.findOneBy({ id });
  }

  update(id: number, updateDrzavaDto: UpdateDrzavaDto) {
    return `This action updates a #${id} drzava`;
  }

  remove(id: number) {
    return `This action removes a #${id} drzava`;
  }
}
