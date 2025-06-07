import { Injectable } from '@nestjs/common';
import { CreatePolaznikDto } from './dto/create-polaznik.dto';
import { UpdatePolaznikDto } from './dto/update-polaznik.dto';

@Injectable()
export class PolaznikService {
  create(createPolaznikDto: CreatePolaznikDto) {
    return 'This action adds a new polaznik';
  }

  findAll() {
    return `This action returns all polaznik`;
  }

  findOne(id: number) {
    return `This action returns a #${id} polaznik`;
  }

  update(id: number, updatePolaznikDto: UpdatePolaznikDto) {
    return `This action updates a #${id} polaznik`;
  }

  remove(id: number) {
    return `This action removes a #${id} polaznik`;
  }
}
