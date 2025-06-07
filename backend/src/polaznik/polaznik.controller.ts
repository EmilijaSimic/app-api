import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PolaznikService } from './polaznik.service';
import { CreatePolaznikDto } from './dto/create-polaznik.dto';
import { UpdatePolaznikDto } from './dto/update-polaznik.dto';

@Controller('polaznik')
export class PolaznikController {
  constructor(private readonly polaznikService: PolaznikService) {}

  @Post()
  create(@Body() createPolaznikDto: CreatePolaznikDto) {
    return this.polaznikService.create(createPolaznikDto);
  }

  @Get()
  findAll() {
    return this.polaznikService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.polaznikService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePolaznikDto: UpdatePolaznikDto) {
    return this.polaznikService.update(+id, updatePolaznikDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.polaznikService.remove(+id);
  }
}
