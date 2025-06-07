import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Drzava } from 'src/drzava/entities/drzava.entity';
import { Repository } from 'typeorm';
import { CreateVisokoskolskaUstanovaDto } from './dto/create-visokoskolska-ustanova.dto';
import { UpdateVisokoskolskaUstanovaDto } from './dto/update-visokoskolska-ustanova.dto';
import { VisokoskolskaUstanova } from './entities/visokoskolska-ustanova.entity';

@Injectable()
export class VisokoskolskaUstanovaService {
  constructor(
    @InjectRepository(VisokoskolskaUstanova)
    private visokoskolskaRepo: Repository<VisokoskolskaUstanova>,

    @InjectRepository(Drzava) private drzavaRepo: Repository<Drzava>,
  ) {}

  async create(createVisokoskolskaUstanovaDto: CreateVisokoskolskaUstanovaDto) {
    const drz = await this.drzavaRepo.findOneBy({
      id: createVisokoskolskaUstanovaDto.drzavaId,
    });

    if (!drz) {
      throw new Error('Država nije pronađena');
    }
    const ustanova = this.visokoskolskaRepo.create({
      ...createVisokoskolskaUstanovaDto,
      drzava: drz,
    });
    return await this.visokoskolskaRepo.save(ustanova);
  }

  async findAll() {
    return await this.visokoskolskaRepo.find();
  }

  async findOne(id: number) {
    return await this.visokoskolskaRepo.findOneBy({ id });
  }

  update(
    id: number,
    updateVisokoskolskaUstanovumDto: UpdateVisokoskolskaUstanovaDto,
  ) {
    return;
  }

  async remove(id: number) {
    return await this.visokoskolskaRepo.delete(id);
  }
}
