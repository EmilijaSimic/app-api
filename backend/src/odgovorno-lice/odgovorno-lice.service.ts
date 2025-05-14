import { Injectable } from '@nestjs/common';
import { CreateOdgovornoLiceDto } from './dto/create-odgovorno-louse.dto';
import { UpdateOdgovornoLiceDto } from './dto/update-odgovorno-louse.dto';

@Injectable()
export class OdgovornoLiceService {
  create(createOdgovornoLiceDto: CreateOdgovornoLiceDto) {
    return 'This action adds a new odgovornoLice';
  }

  findAll() {
    return `This action returns all odgovornoLice`;
  }

  findOne(id: number) {
    return `This action returns a #${id} odgovornoLice`;
  }

  update(id: number, updateOdgovornoLiceDto: UpdateOdgovornoLiceDto) {
    return `This action updates a #${id} odgovornoLice`;
  }

  remove(id: number) {
    return `This action removes a #${id} odgovornoLice`;
  }
}
