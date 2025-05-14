import { Injectable } from '@nestjs/common';
import { CreateInstitucijaDto } from './dto/create-institucija.dto';
import { UpdateInstitucijaDto } from './dto/update-institucija.dto';

@Injectable()
export class InstitucijaService {
  create(createInstitucijaDto: CreateInstitucijaDto) {
    return 'This action adds a new institucija';
  }

  findAll() {
    return `This action returns all institucija`;
  }

  findOne(id: number) {
    return `This action returns a #${id} institucija`;
  }

  update(id: number, updateInstitucijaDto: UpdateInstitucijaDto) {
    return `This action updates a #${id} institucija`;
  }

  remove(id: number) {
    return `This action removes a #${id} institucija`;
  }
}
