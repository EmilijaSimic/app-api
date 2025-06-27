import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreatePreduslovDto } from './dto/create-preduslov.dto';
import { UpdatePreduslovDto } from './dto/update-preduslov.dto';
import { PreduslovService } from './preduslov.service';

@Controller('preduslov')
export class PreduslovController {
  constructor(private readonly preduslovService: PreduslovService) {}

  @Post()
  create(@Body() createPreduslovDto: CreatePreduslovDto) {
    return this.preduslovService.create(createPreduslovDto);
  }

  @Get()
  findAll() {
    return this.preduslovService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.preduslovService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePreduslovDto: UpdatePreduslovDto) {
    return this.preduslovService.update(+id, updatePreduslovDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.preduslovService.remove(+id);
  }
}
