import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DrugaUstanovaService } from './druga-ustanova.service';
import { CreateDrugaUstanovaDto } from './dto/create-druga-ustanova.dto';
import { UpdateDrugaUstanovaDto } from './dto/update-druga-ustanova.dto';

@Controller('druga-ustanova')
export class DrugaUstanovaController {
  constructor(private readonly drugaUstanovaService: DrugaUstanovaService) {}

  @Post()
  create(@Body() createDrugaUstanovaDto: CreateDrugaUstanovaDto) {
    return this.drugaUstanovaService.create(createDrugaUstanovaDto);
  }

  @Get()
  findAll() {
    return this.drugaUstanovaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.drugaUstanovaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDrugaUstanovaDto: UpdateDrugaUstanovaDto,
  ) {
    return this.drugaUstanovaService.update(+id, updateDrugaUstanovaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.drugaUstanovaService.remove(+id);
  }
}
