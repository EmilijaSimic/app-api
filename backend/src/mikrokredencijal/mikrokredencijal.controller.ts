import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MikrokredencijalService } from './mikrokredencijal.service';
import { CreateMikrokredencijalDto } from './dto/create-mikrokredencijal.dto';
import { UpdateMikrokredencijalDto } from './dto/update-mikrokredencijal.dto';

@Controller('mikrokredencijal')
export class MikrokredencijalController {
  constructor(private readonly mikrokredencijalService: MikrokredencijalService) {}

  @Post()
  create(@Body() createMikrokredencijalDto: CreateMikrokredencijalDto) {
    return this.mikrokredencijalService.create(createMikrokredencijalDto);
  }

  @Get()
  findAll() {
    return this.mikrokredencijalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mikrokredencijalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMikrokredencijalDto: UpdateMikrokredencijalDto) {
    return this.mikrokredencijalService.update(+id, updateMikrokredencijalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mikrokredencijalService.remove(+id);
  }
}
