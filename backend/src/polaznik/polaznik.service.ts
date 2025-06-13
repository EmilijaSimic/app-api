import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Drzava } from 'src/drzava/entities/drzava.entity';
import { Repository } from 'typeorm';
import { CreatePolaznikDto } from './dto/create-polaznik.dto';
import { UpdatePolaznikDto } from './dto/update-polaznik.dto';
import { Polaznik } from './entities/polaznik.entity';

@Injectable()
export class PolaznikService {

  constructor(
    @InjectRepository(Polaznik)
    private polaznikRepository:Repository<Polaznik>,

    @InjectRepository(Drzava)
    private drzavaRepository:Repository<Drzava>,
  ){}

  async create(createPolaznikDto: CreatePolaznikDto) {
    const drzava = await this.drzavaRepository.findOneBy({id:createPolaznikDto.drzavaID});
    if (!drzava) {
      throw new Error('Država nije pronađena');
    }

    const polaznik = this.polaznikRepository.create({...createPolaznikDto, drzava: drzava});
    return this.polaznikRepository.save(polaznik);
  }

  async findAll() {
    return await this.polaznikRepository.find();
  }

  async findOne(id: number) {
    return await this.polaznikRepository.findOneBy({id});
  }

  async update(id: number, updatePolaznikDto: UpdatePolaznikDto) {
    const polaznik = await this.polaznikRepository.findOneBy({id});
     if (!polaznik) {
    throw new Error('Polaznik nije pronađen');
  }
    Object.assign(polaznik, updatePolaznikDto);
    return await this.polaznikRepository.save(polaznik);
  }

  async remove(id: number) {
    return await this.polaznikRepository.delete(id);
  }
}
