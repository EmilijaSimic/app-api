import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DrzavaService } from './drzava.service';
import { CreateDrzavaDto } from './dto/create-drzava.dto';
import { UpdateDrzavaDto } from './dto/update-drzava.dto';

@Controller('drzava')
export class DrzavaController {
  constructor(private readonly drzavaService: DrzavaService) {}

  @Post()
  create(@Body() createDrzavaDto: CreateDrzavaDto) {
    return this.drzavaService.create(createDrzavaDto);
  }

  @Get()
  findAll() {
    return this.drzavaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.drzavaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDrzavaDto: UpdateDrzavaDto) {
    return this.drzavaService.update(+id, updateDrzavaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.drzavaService.remove(+id);
  }
}
