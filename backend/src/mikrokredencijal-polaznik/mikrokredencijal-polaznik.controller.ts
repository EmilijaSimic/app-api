import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MikrokredencijalPolaznikService } from './mikrokredencijal-polaznik.service';
import { CreateMikrokredencijalPolaznikDto } from './dto/create-mikrokredencijal-polaznik.dto';
import { UpdateMikrokredencijalPolaznikDto } from './dto/update-mikrokredencijal-polaznik.dto';

@Controller('mikrokredencijal-polaznik')
export class MikrokredencijalPolaznikController {
  constructor(private readonly mikrokredencijalPolaznikService: MikrokredencijalPolaznikService) {}

  @Post()
  create(@Body() createMikrokredencijalPolaznikDto: CreateMikrokredencijalPolaznikDto) {
    return this.mikrokredencijalPolaznikService.create(createMikrokredencijalPolaznikDto);
  }

  @Get()
  findAll() {
    return this.mikrokredencijalPolaznikService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mikrokredencijalPolaznikService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMikrokredencijalPolaznikDto: UpdateMikrokredencijalPolaznikDto) {
    return this.mikrokredencijalPolaznikService.update(+id, updateMikrokredencijalPolaznikDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mikrokredencijalPolaznikService.remove(+id);
  }
}
