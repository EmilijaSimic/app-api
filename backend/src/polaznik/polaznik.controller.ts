import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreatePolaznikDto } from './dto/create-polaznik.dto';
import { UpdatePolaznikDto } from './dto/update-polaznik.dto';
import { PolaznikService } from './polaznik.service';

@Controller('polaznik')
export class PolaznikController {
  constructor(private readonly polaznikService: PolaznikService) {}

  @Post()
  async create(@Body() createPolaznikDto: CreatePolaznikDto) {
    return this.polaznikService.create(createPolaznikDto);
  }

  @Get()
  async findAll() {
    return this.polaznikService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.polaznikService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePolaznikDto: UpdatePolaznikDto) {
    return this.polaznikService.update(+id, updatePolaznikDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.polaznikService.remove(+id);
  }
}
