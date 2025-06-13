import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Drzava } from 'src/drzava/entities/drzava.entity';
import { Repository } from 'typeorm';
import { CreateOdgovornoLiceDto } from './dto/create-odgovorno-louse.dto';
import { UpdateOdgovornoLiceDto } from './dto/update-odgovorno-louse.dto';
import { OdgovornoLice } from './entities/odgovorno-louse.entity';

@Injectable()
export class OdgovornoLiceService {
  constructor(
    @InjectRepository(OdgovornoLice)
    private odgLiceRepository: Repository<OdgovornoLice>,

    @InjectRepository(Drzava)
    private drzavaRepository: Repository<Drzava>,
  ) {}

  async create(createOdgovornoLiceDto: CreateOdgovornoLiceDto) {
    const drzava = await this.drzavaRepository.findOneBy({ id: createOdgovornoLiceDto.drzavaID });
    if (!drzava) {
      throw new Error('Država nije pronađena');
    }

    const odgLice = this.odgLiceRepository.create({ ...createOdgovornoLiceDto, drzava: drzava });
    return this.odgLiceRepository.save(odgLice);
  }

  async findAll() {
    return await this.odgLiceRepository.find();
  }

  async findOne(id: number) {
    return await this.odgLiceRepository.findOneBy({ id });
  }

  async update(id: number, updatePolaznikDto: UpdateOdgovornoLiceDto) {
    const odgLice = await this.odgLiceRepository.findOneBy({ id });
    if (!odgLice) {
      throw new Error('Odgovorno lice nije pronađen');
    }
    Object.assign(odgLice, updatePolaznikDto);
    return await this.odgLiceRepository.save(odgLice);
  }

  async remove(id: number) {
    return await this.odgLiceRepository.delete(id);
  }
}
