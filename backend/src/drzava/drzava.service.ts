import { Injectable } from '@nestjs/common';
import { CreateDrzavaDto } from './dto/create-drzava.dto';
import { UpdateDrzavaDto } from './dto/update-drzava.dto';

@Injectable()
export class DrzavaService {
  create(createDrzavaDto: CreateDrzavaDto) {
    return 'This action adds a new drzava';
  }

  findAll() {
    return `This action returns all drzava`;
  }

  findOne(id: number) {
    return `This action returns a #${id} drzava`;
  }

  update(id: number, updateDrzavaDto: UpdateDrzavaDto) {
    return `This action updates a #${id} drzava`;
  }

  remove(id: number) {
    return `This action removes a #${id} drzava`;
  }
}
