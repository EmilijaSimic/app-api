import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Drzava } from 'src/drzava/entities/drzava.entity';
import { Izvor } from 'src/izvor/entities/izvor.entity';
import { In, Repository } from 'typeorm';
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

    @InjectRepository(Izvor)
    private izvorRepository: Repository<Izvor>,
  ) {}

  async create(createOdgovornoLiceDto: CreateOdgovornoLiceDto) {
    const drzava = await this.drzavaRepository.findOneBy({ id: createOdgovornoLiceDto.drzavaID });
    const izvori = await this.izvorRepository.find({where: { id: In(createOdgovornoLiceDto.izvoriId) }});
    if (!drzava) {
      throw new Error('Država nije pronađena');
    }

    const odgLice = this.odgLiceRepository.create({ ...createOdgovornoLiceDto, drzava: drzava, izvori: izvori});
    return this.odgLiceRepository.save(odgLice);
  }

  async findAll() {
    return await this.odgLiceRepository.find();
  }

  async findOne(id: number) {
    return await this.odgLiceRepository.findOneBy({ id });
  }

  async update(id: number, updatePolaznikDto: UpdateOdgovornoLiceDto) {
     const odgLice = await this.odgLiceRepository.findOne({
    where: { id },
    relations: ['izvori'],
  });

  if (!odgLice) {
    throw new Error('Odgovorno lice nije pronađeno');
  }

  if (updatePolaznikDto.izvoriId) {
    const izvori = await this.izvorRepository.find({
      where: { id: In(updatePolaznikDto.izvoriId) },
    });
    odgLice.izvori = izvori;
  }

  if (updatePolaznikDto.email !== undefined) odgLice.email = updatePolaznikDto.email;
  if (updatePolaznikDto.lozinka !== undefined) odgLice.lozinka = updatePolaznikDto.lozinka;
  if (updatePolaznikDto.ime !== undefined) odgLice.ime = updatePolaznikDto.ime;
  if (updatePolaznikDto.prezime !== undefined) odgLice.prezime = updatePolaznikDto.prezime;
  if (updatePolaznikDto.tipOdgLica !== undefined) odgLice.tipOdgLica = updatePolaznikDto.tipOdgLica;
  if (updatePolaznikDto.drzavaID !== undefined) {
    const drzava = await this.drzavaRepository.findOneBy({ id: updatePolaznikDto.drzavaID });
    if (!drzava) throw new Error('Država nije pronađena');
    odgLice.drzava = drzava;
  }
    return await this.odgLiceRepository.save(odgLice);
  }

  async remove(id: number) {
    return await this.odgLiceRepository.delete(id);
  }
}
