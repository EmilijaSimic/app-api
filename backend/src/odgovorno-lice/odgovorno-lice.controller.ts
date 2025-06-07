import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OdgovornoLiceService } from './odgovorno-lice.service';
import { CreateOdgovornoLiceDto } from './dto/create-odgovorno-louse.dto';
import { UpdateOdgovornoLiceDto } from './dto/update-odgovorno-louse.dto';

@Controller('odgovorno-lice')
export class OdgovornoLiceController {
  constructor(private readonly odgovornoLiceService: OdgovornoLiceService) {}

  @Post()
  create(@Body() createOdgovornoLiceDto: CreateOdgovornoLiceDto) {
    return this.odgovornoLiceService.create(createOdgovornoLiceDto);
  }

  @Get()
  findAll() {
    return this.odgovornoLiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.odgovornoLiceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOdgovornoLiceDto: UpdateOdgovornoLiceDto) {
    return this.odgovornoLiceService.update(+id, updateOdgovornoLiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.odgovornoLiceService.remove(+id);
  }
}
