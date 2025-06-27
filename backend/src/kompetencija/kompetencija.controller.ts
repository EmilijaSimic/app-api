import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KompetencijaService } from './kompetencija.service';
import { CreateKompetencijaDto } from './dto/create-kompetencija.dto';
import { UpdateKompetencijaDto } from './dto/update-kompetencija.dto';

@Controller('kompetencija')
export class KompetencijaController {
  constructor(private readonly kompetencijaService: KompetencijaService) {}

  @Post()
  create(@Body() createKompetencijaDto: CreateKompetencijaDto) {
    return this.kompetencijaService.create(createKompetencijaDto);
  }

  @Get()
  findAll() {
    return this.kompetencijaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kompetencijaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKompetencijaDto: UpdateKompetencijaDto) {
    return this.kompetencijaService.update(+id, updateKompetencijaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kompetencijaService.remove(+id);
  }
}
