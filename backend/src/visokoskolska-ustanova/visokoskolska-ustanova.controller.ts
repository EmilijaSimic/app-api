import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VisokoskolskaUstanovaService } from './visokoskolska-ustanova.service';
import { CreateVisokoskolskaUstanovumDto } from './dto/create-visokoskolska-ustanovum.dto';
import { UpdateVisokoskolskaUstanovumDto } from './dto/update-visokoskolska-ustanovum.dto';

@Controller('visokoskolska-ustanova')
export class VisokoskolskaUstanovaController {
  constructor(private readonly visokoskolskaUstanovaService: VisokoskolskaUstanovaService) {}

  @Post()
  create(@Body() createVisokoskolskaUstanovumDto: CreateVisokoskolskaUstanovumDto) {
    return this.visokoskolskaUstanovaService.create(createVisokoskolskaUstanovumDto);
  }

  @Get()
  findAll() {
    return this.visokoskolskaUstanovaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.visokoskolskaUstanovaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVisokoskolskaUstanovumDto: UpdateVisokoskolskaUstanovumDto) {
    return this.visokoskolskaUstanovaService.update(+id, updateVisokoskolskaUstanovumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.visokoskolskaUstanovaService.remove(+id);
  }
}
