import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OdgovornoLice } from 'src/odgovorno-lice/entities/odgovorno-louse.entity';
import { In, Repository } from 'typeorm';
import { CreateIzvorDto } from './dto/create-izvor.dto';
import { UpdateIzvorDto } from './dto/update-izvor.dto';
import { Izvor } from './entities/izvor.entity';

@Injectable()
export class IzvorService {
  constructor(@InjectRepository(Izvor) private izvorRepo: Repository<Izvor>,
  @InjectRepository(OdgovornoLice) private odgLiceRepo: Repository<OdgovornoLice>,
) {}

  async create(createIzvorDto: CreateIzvorDto) {
    const odgovornaLica = await this.odgLiceRepo.find({
  where: { id: In(createIzvorDto.odgovornaLicaId) }
});
     const izvor = this.izvorRepo.create({...createIzvorDto, odgovornaLica: odgovornaLica,});
    return await this.izvorRepo.save(izvor);
  }

  async findAll() {
    return await this.izvorRepo.find();
  }

  async findOne(id: number) {
    return await this.izvorRepo.findOneBy({ id });
  }

  async update(id: number, updateIzvorDto: UpdateIzvorDto) {
     const izvor = await this.izvorRepo.findOne({
    where: { id },
    relations: ['odgovornaLica'],
  });

  if (!izvor) {
    throw new Error('Nije moguće pronaći izvor.');
  }

  if (updateIzvorDto.odgovornaLicaId) {
    const odgovornaLica = await this.odgLiceRepo.find({
      where: { id: In(updateIzvorDto.odgovornaLicaId) },
    });
    izvor.odgovornaLica = odgovornaLica;
  }

  if (updateIzvorDto.tip !== undefined) izvor.tip = updateIzvorDto.tip;
  if (updateIzvorDto.naziv !== undefined) izvor.naziv = updateIzvorDto.naziv;
  if (updateIzvorDto.opis !== undefined) izvor.opis = updateIzvorDto.opis;
    return await this.izvorRepo.save(izvor);
  }

  async remove(id: number) {
    return await this.izvorRepo.delete(id);
  }
}
