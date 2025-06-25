import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Institucija } from 'src/institucija/entities/institucija.entity';
import { Izvor } from 'src/izvor/entities/izvor.entity';
import { Preduslov } from 'src/preduslov/entities/preduslov.entity';
import { Repository } from 'typeorm';
import { CreateMikrokredencijalDto } from './dto/create-mikrokredencijal.dto';
import { UpdateMikrokredencijalDto } from './dto/update-mikrokredencijal.dto';
import { Mikrokredencijal } from './entities/mikrokredencijal.entity';

@Injectable()
export class MikrokredencijalService {

  constructor(
    @InjectRepository(Mikrokredencijal)
    private mikrokredencijalRepo:Repository<Mikrokredencijal>,

    @InjectRepository(Preduslov)
    private preduslovRepository:Repository<Preduslov>,

    @InjectRepository(Izvor)
    private izvorRepository:Repository<Izvor>,

    @InjectRepository(Institucija)
    private institucijaRepository:Repository<Institucija>,

  ){}

  async create(createMikrokredencijalDto: CreateMikrokredencijalDto) {
    const preduslov = await this.preduslovRepository.findOneBy({id:createMikrokredencijalDto.preduslovId});
    const izvor = await this.izvorRepository.findOneBy({id:createMikrokredencijalDto.izvorId});
    const institucija = await this.institucijaRepository.findOneBy({id:createMikrokredencijalDto.izdavackoTeloId});

    if (!preduslov || !izvor || !institucija) {
      throw new Error('Nije pronajeno!');
    }

    const mikrokredencijal = this.mikrokredencijalRepo.create({...createMikrokredencijalDto, izdavackoTelo: institucija, izvor:izvor, preduslov:preduslov});
    return this.mikrokredencijalRepo.save(mikrokredencijal);
  }

  async findAll() {
    return await this.mikrokredencijalRepo.find();
  }

  async findOne(id: number) {
    return await this.mikrokredencijalRepo.findOneBy({id});
  }

  async update(id: number, updateMikrokredencijalDto: UpdateMikrokredencijalDto) {
    const mikrokredencijal = await this.mikrokredencijalRepo.findOneBy({id});
     if (!mikrokredencijal) {
    throw new Error('Mikrokredencijal nije pronađen');
  }
    Object.assign(mikrokredencijal, updateMikrokredencijalDto);
    return await this.mikrokredencijalRepo.save(mikrokredencijal);
  }

  async remove(id: number) {
    return this.mikrokredencijalRepo.delete(id);
  }
}
