import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IzvorService } from './izvor.service';
import { CreateIzvorDto } from './dto/create-izvor.dto';
import { UpdateIzvorDto } from './dto/update-izvor.dto';

@Controller('izvor')
export class IzvorController {
  constructor(private readonly izvorService: IzvorService) {}

  @Post()
  create(@Body() createIzvorDto: CreateIzvorDto) {
    return this.izvorService.create(createIzvorDto);
  }

  @Get()
  findAll() {
    return this.izvorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.izvorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIzvorDto: UpdateIzvorDto) {
    return this.izvorService.update(+id, updateIzvorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.izvorService.remove(+id);
  }
}
