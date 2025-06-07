import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateVisokoskolskaUstanovaDto } from './dto/create-visokoskolska-ustanova.dto';
import { UpdateVisokoskolskaUstanovaDto } from './dto/update-visokoskolska-ustanova.dto';
import { VisokoskolskaUstanovaService } from './visokoskolska-ustanova.service';

@Controller('visokoskolska-ustanova')
export class VisokoskolskaUstanovaController {
  constructor(
    private readonly visokoskolskaUstanovaService: VisokoskolskaUstanovaService,
  ) {}

  @Post()
  create(
    @Body() createVisokoskolskaUstanovumDto: CreateVisokoskolskaUstanovaDto,
  ) {
    return this.visokoskolskaUstanovaService.create(
      createVisokoskolskaUstanovumDto,
    );
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
  update(
    @Param('id') id: string,
    @Body() updateVisokoskolskaUstanovumDto: UpdateVisokoskolskaUstanovaDto,
  ) {
    return this.visokoskolskaUstanovaService.update(
      +id,
      updateVisokoskolskaUstanovumDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.visokoskolskaUstanovaService.remove(+id);
  }
}
