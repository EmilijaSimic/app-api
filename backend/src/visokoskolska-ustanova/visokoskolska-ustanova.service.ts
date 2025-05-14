import { Injectable } from '@nestjs/common';
import { CreateVisokoskolskaUstanovumDto } from './dto/create-visokoskolska-ustanovum.dto';
import { UpdateVisokoskolskaUstanovumDto } from './dto/update-visokoskolska-ustanovum.dto';

@Injectable()
export class VisokoskolskaUstanovaService {
  create(createVisokoskolskaUstanovumDto: CreateVisokoskolskaUstanovumDto) {
    return 'This action adds a new visokoskolskaUstanovum';
  }

  findAll() {
    return `This action returns all visokoskolskaUstanova`;
  }

  findOne(id: number) {
    return `This action returns a #${id} visokoskolskaUstanovum`;
  }

  update(id: number, updateVisokoskolskaUstanovumDto: UpdateVisokoskolskaUstanovumDto) {
    return `This action updates a #${id} visokoskolskaUstanovum`;
  }

  remove(id: number) {
    return `This action removes a #${id} visokoskolskaUstanovum`;
  }
}
