import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Drzava } from 'src/drzava/entities/drzava.entity';
import { Repository } from 'typeorm';
import { CreateDrugaUstanovaDto } from './dto/create-druga-ustanova.dto';
import { UpdateDrugaUstanovaDto } from './dto/update-druga-ustanova.dto';
import { DrugaUstanova } from './entities/druga-ustanova.entity';

@Injectable()
export class DrugaUstanovaService {
  constructor(
    @InjectRepository(DrugaUstanova)
    private drugaUstanovaRepo: Repository<DrugaUstanova>,
    @InjectRepository(Drzava) private drzavaRepo: Repository<Drzava>,
  ) {}

  async create(createDrugaUstanovaDto: CreateDrugaUstanovaDto) {
    const drzava = await this.drzavaRepo.findOneBy({
      id: createDrugaUstanovaDto.drzavaId,
    });
    if (!drzava) {
      throw new Error('Drzava nije pronadjena!');
    }
    const druga = this.drugaUstanovaRepo.create({
      ...createDrugaUstanovaDto,
      drzava: drzava,
    });

    return await this.drugaUstanovaRepo.save(druga);
  }

  async findAll() {
    return await this.drugaUstanovaRepo.find();
  }

  async findOne(id: number) {
    return await this.drugaUstanovaRepo.findOneBy({ id });
  }

  update(id: number, updateDrugaUstanovaDto: UpdateDrugaUstanovaDto) {
    return `This action updates a #${id} drugaUstanovum`;
  }

  async remove(id: number) {
    return await this.drugaUstanovaRepo.delete(id);
  }
}
