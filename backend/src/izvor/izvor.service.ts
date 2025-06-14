import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateIzvorDto } from './dto/create-izvor.dto';
import { UpdateIzvorDto } from './dto/update-izvor.dto';
import { Izvor } from './entities/izvor.entity';

@Injectable()
export class IzvorService {
  constructor(@InjectRepository(Izvor) private izvorRepo: Repository<Izvor>) {}
  async create(createIzvorDto: CreateIzvorDto) {
    const izvor = this.izvorRepo.create(createIzvorDto);
    return await this.izvorRepo.save(izvor);
  }

  async findAll() {
    return await this.izvorRepo.find();
  }

  async findOne(id: number) {
    return await this.izvorRepo.findOneBy({ id });
  }

  async update(id: number, updateIzvorDto: UpdateIzvorDto) {
    const izvor = await this.izvorRepo.findOneBy({ id });
    if (!izvor) {
      throw new Error('Nije moguce pronaci izvor');
    }
    Object.assign(izvor, updateIzvorDto);
    return await this.izvorRepo.save(izvor);
  }

  async remove(id: number) {
    return await this.izvorRepo.delete(id);
  }
}
