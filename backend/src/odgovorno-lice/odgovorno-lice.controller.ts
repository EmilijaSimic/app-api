import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateOdgovornoLiceDto } from './dto/create-odgovorno-louse.dto';
import { UpdateOdgovornoLiceDto } from './dto/update-odgovorno-louse.dto';
import { OdgovornoLiceService } from './odgovorno-lice.service';

@Controller('odgovorno-lice')
export class OdgovornoLiceController {
  constructor(private readonly odgovornoLiceService: OdgovornoLiceService) {}

  @Post()
  async create(@Body() createOdgovornoLiceDto: CreateOdgovornoLiceDto) {
    return this.odgovornoLiceService.create(createOdgovornoLiceDto);
  }

  @Get()
  async findAll() {
    return this.odgovornoLiceService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.odgovornoLiceService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateOdgovornoLiceDto: UpdateOdgovornoLiceDto) {
    return this.odgovornoLiceService.update(+id, updateOdgovornoLiceDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.odgovornoLiceService.remove(+id);
  }
}
