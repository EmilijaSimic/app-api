import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Institucija } from 'src/institucija/entities/institucija.entity';
import { Izvor } from 'src/izvor/entities/izvor.entity';
import { MikrokredencijalPolaznik } from 'src/mikrokredencijal-polaznik/entities/mikrokredencijal-polaznik.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateMikrokredencijalDto } from './dto/create-mikrokredencijal.dto';
import { UpdateMikrokredencijalDto } from './dto/update-mikrokredencijal.dto';
import { Mikrokredencijal } from './entities/mikrokredencijal.entity';

@Injectable()
export class MikrokredencijalService {
  constructor(
    @InjectRepository(Mikrokredencijal)
    private mikrokredencijalRepo: Repository<Mikrokredencijal>,

    // @InjectRepository(Preduslov)
    // private preduslovRepository:Repository<Preduslov>,

    @InjectRepository(Izvor)
    private izvorRepository: Repository<Izvor>,

    @InjectRepository(Institucija)
    private institucijaRepository: Repository<Institucija>,

    private dataSource: DataSource,
  ) {}

  async create(createMikrokredencijalDto: CreateMikrokredencijalDto) {
    //const preduslov = await this.preduslovRepository.findOneBy({id:createMikrokredencijalDto.preduslovId});
    const izvor = await this.izvorRepository.findOneBy({
      id: createMikrokredencijalDto.izvorId,
    });
    const institucija = await this.institucijaRepository.findOneBy({
      id: createMikrokredencijalDto.izdavackoTeloId,
    });

    if (!izvor || !institucija) {
      throw new Error('Nije pronajeno!');
    }

    const mikrokredencijal = this.mikrokredencijalRepo.create({
      ...createMikrokredencijalDto,
      izdavackoTelo: institucija,
      izvor: izvor,
    });
    return this.mikrokredencijalRepo.save(mikrokredencijal);
  }

  async findAll() {
    return await this.mikrokredencijalRepo.find();
  }

  async findOne(id: number) {
    return await this.mikrokredencijalRepo.findOneBy({ id });
  }

  async update(id: number, dto: UpdateMikrokredencijalDto) {
    const mikrokredencijal = await this.mikrokredencijalRepo.findOne({
      where: { id },
      relations: ['izdavackoTelo', 'izvor', 'preduslov'],
    });

    if (!mikrokredencijal) {
      throw new Error('Mikrokredencijal nije pronađen');
    }

    if (dto.izdavackoTeloId !== undefined) {
      const institucija = await this.institucijaRepository.findOneBy({
        id: dto.izdavackoTeloId,
      });
      if (!institucija) throw new Error('Institucija nije pronađena');
      mikrokredencijal.izdavackoTelo = institucija;
    }

    if (dto.izvorId !== undefined) {
      const izvor = await this.izvorRepository.findOneBy({
        id: dto.izvorId,
      });
      if (!izvor) throw new Error('Izvor nije pronađen');
      mikrokredencijal.izvor = izvor;
    }

    // if (dto.preduslovId !== undefined) {
    //   const preduslov = await this.preduslovRepository.findOneBy({
    //     id: dto.preduslovId,
    //   });
    //   if (!preduslov) throw new Error('Preduslov nije pronađen');
    //   mikrokredencijal.preduslov = preduslov;
    //}

    Object.assign(mikrokredencijal, dto);

    return await this.mikrokredencijalRepo.save(mikrokredencijal);
  }

  async remove(id: number) {
    return this.mikrokredencijalRepo.delete(id);
  }

  async findByPolaznik(polaznikId: number) {
    const povezano = await this.dataSource
      .getRepository(MikrokredencijalPolaznik)
      .createQueryBuilder('mp')
      .leftJoinAndSelect('mp.mikrokredencijal', 'mk')
      .where('mp.polaznik.id = :id', { id: polaznikId })
      .getMany();

    return povezano.map((mp) => mp.mikrokredencijal);
  }

  async findPotpisani(polaznikId: number) {
    const rezultat = await this.dataSource
      .getRepository(MikrokredencijalPolaznik)
      .createQueryBuilder('mp')
      .leftJoinAndSelect('mp.mikrokredencijal', 'mk')
      .where('mp.polaznik.id = :id', { id: polaznikId })
      .andWhere('mp.potpisao IS NOT NULL')
      .getMany();

    return rezultat.map((mp) => mp.mikrokredencijal);
  }

  async findNepotpisani(polaznikId: number) {
    const rezultat = await this.dataSource
      .getRepository(MikrokredencijalPolaznik)
      .createQueryBuilder('mp')
      .leftJoinAndSelect('mp.mikrokredencijal', 'mk')
      .where('mp.polaznik.id = :id', { id: polaznikId })
      .andWhere('mp.potpisao IS NULL')
      .getMany();

    return rezultat.map((mp) => mp.mikrokredencijal);
  }
    async findByProfesor(profesorId: number) {
    const mikrokredencijali = await this.dataSource
    .getRepository(MikrokredencijalPolaznik)
    .createQueryBuilder('mp')
    .leftJoinAndSelect('mp.mikrokredencijal', 'mk')
    .leftJoinAndSelect('mk.izvor', 'izvor')
    .leftJoin('izvor.odgovornaLica', 'prof')
    .leftJoinAndSelect('mp.polaznik', 'polaznik')
    .where('prof.id = :profesorId', { profesorId })
    .andWhere('mp.potpisao IS NULL')
    .getMany();

    return mikrokredencijali;
  }
}
