import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mikrokredencijal } from 'src/mikrokredencijal/entities/mikrokredencijal.entity';
import { OdgovornoLice } from 'src/odgovorno-lice/entities/odgovorno-louse.entity';
import { Polaznik } from 'src/polaznik/entities/polaznik.entity';
import { Repository } from 'typeorm';
import { CreateMikrokredencijalPolaznikDto } from './dto/create-mikrokredencijal-polaznik.dto';
import { UpdateMikrokredencijalPolaznikDto } from './dto/update-mikrokredencijal-polaznik.dto';
import { MikrokredencijalPolaznik } from './entities/mikrokredencijal-polaznik.entity';

@Injectable()
export class MikrokredencijalPolaznikService {

  constructor(

      @InjectRepository(MikrokredencijalPolaznik)
      private mikropolaznikRepository:Repository<MikrokredencijalPolaznik>,

      @InjectRepository(Mikrokredencijal)
      private mikrokredencijalRepo:Repository<Mikrokredencijal>,
  
      @InjectRepository(Polaznik)
      private polaznikRepository:Repository<Polaznik>,
  
      @InjectRepository(OdgovornoLice)
      private odgLiceRepository:Repository<OdgovornoLice>,
  
    ){}

  async create(createMikrokredencijalPolaznikDto: CreateMikrokredencijalPolaznikDto) {
    const mikrokredencijal = await this.mikrokredencijalRepo.findOneBy({id:createMikrokredencijalPolaznikDto.mikrokredencijalId});
    const polaznik = await this.polaznikRepository.findOneBy({id:createMikrokredencijalPolaznikDto.polaznikId});
    const odgLice = await this.odgLiceRepository.findOneBy({id:createMikrokredencijalPolaznikDto.potpisaoId});

    if (!mikrokredencijal || !polaznik || !odgLice) {
      throw new Error('Nije pronajeno!');
    }

    const mikrokredencijalPolaznik = this.mikropolaznikRepository.create({...createMikrokredencijalPolaznikDto, polaznik:polaznik, mikrokredencijal:mikrokredencijal, potpisao:odgLice});
    return this.mikropolaznikRepository.save(mikrokredencijalPolaznik);
  }

  async findAll() {
    return await this.mikropolaznikRepository.find();
  }

  async findOne(id: number) {
    return await this.mikropolaznikRepository.findOneBy({id});
  }

  async update(id: number, updateMikrokredencijalPolaznikDto: UpdateMikrokredencijalPolaznikDto) {
     const mikropolaznik = await this.mikropolaznikRepository.findOne({
    where: { id },
    relations: ['mikrokredencijal', 'polaznik', 'odgovornoLice'],
  });

  if (!mikropolaznik) {
    throw new Error('Mikrokredencijal-Polaznik nije pronađen');
  }

  if (updateMikrokredencijalPolaznikDto.mikrokredencijalId !== undefined) {
    const mk = await this.mikrokredencijalRepo.findOneBy({
      id: updateMikrokredencijalPolaznikDto.mikrokredencijalId,
    });
    if (!mk) throw new Error('Mikrokredencijal nije pronađen');
    mikropolaznik.mikrokredencijal = mk;
  }
  if (updateMikrokredencijalPolaznikDto.polaznikId !== undefined) {
    const polaznik = await this.polaznikRepository.findOneBy({
      id: updateMikrokredencijalPolaznikDto.polaznikId,
    });
    if (!polaznik) throw new Error('Polaznik nije pronađen');
    mikropolaznik.polaznik = polaznik;
  }

  if (updateMikrokredencijalPolaznikDto.potpisaoId !== undefined) {
    const odgLice = await this.odgLiceRepository.findOneBy({
      id: updateMikrokredencijalPolaznikDto.potpisaoId,
    });
    if (!odgLice) throw new Error('Odgovorno lice nije pronađeno');
    mikropolaznik.potpisao = odgLice;
  }

  Object.assign(mikropolaznik, updateMikrokredencijalPolaznikDto);

  return await this.mikropolaznikRepository.save(mikropolaznik);
  }

  async remove(id: number) {
    return await this.mikropolaznikRepository.delete(id);
  }
}
