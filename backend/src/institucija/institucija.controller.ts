import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateInstitucijaDto } from './dto/create-institucija.dto';
import { UpdateInstitucijaDto } from './dto/update-institucija.dto';
import { InstitucijaService } from './institucija.service';

@Controller('institucija')
export class InstitucijaController {
  constructor(private readonly institucijaService: InstitucijaService) {}

  @Post()
  create(@Body() createInstitucijaDto: CreateInstitucijaDto) {
    return this.institucijaService.create(createInstitucijaDto);
  }

  @Get()
  findAll() {
    return this.institucijaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.institucijaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInstitucijaDto: UpdateInstitucijaDto,
  ) {
    return this.institucijaService.update(+id, updateInstitucijaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.institucijaService.remove(+id);
  }
}
