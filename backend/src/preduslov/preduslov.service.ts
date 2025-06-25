import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePreduslovDto } from './dto/create-preduslov.dto';
import { UpdatePreduslovDto } from './dto/update-preduslov.dto';
import { Preduslov } from './entities/preduslov.entity';

@Injectable()
export class PreduslovService {

  constructor(
    @InjectRepository(Preduslov)
    private preduslovRepository: Repository<Preduslov>,
  ){}

  async create(createPreduslovDto: CreatePreduslovDto) {
    const preduslov = this.preduslovRepository.create(createPreduslovDto);
    return await this.preduslovRepository.save(preduslov);
  }

  async findAll() {
    return await this.preduslovRepository.find();
  }

  async findOne(id: number) {
    return await this.preduslovRepository.findOneBy({id});
  }

  async update(id: number, updatePreduslovDto: UpdatePreduslovDto) {
    const preduslov = await this.preduslovRepository.findOneBy({id});
    if(!preduslov)
      throw new Error('Ne postoji ovaj preduslov');
    Object.assign(preduslov,updatePreduslovDto);
    return this.preduslovRepository.save(preduslov);
  }

  async remove(id: number) {
    return await this.preduslovRepository.delete(id);
  }
}
