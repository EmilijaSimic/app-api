import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateMikrokredencijalDto } from './dto/create-mikrokredencijal.dto';
import { UpdateMikrokredencijalDto } from './dto/update-mikrokredencijal.dto';
import { MikrokredencijalService } from './mikrokredencijal.service';

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

  @Get('polaznik/:id')
  async findForPolaznik(@Param('id') id: number) {
    return this.mikrokredencijalService.findByPolaznik(id);
  }

  @Get('polaznik/:id/potpisani')
  async findPotpisani(@Param('id')id:number){
    return this.mikrokredencijalService.findPotpisani(id);
  }

  @Get('polaznik/:id/nepotpisani')
  async findNepotpisani(@Param('id')id:number){
    return this.mikrokredencijalService.findNepotpisani(id);
  }

  @Get('polaznik/:id/informalni')
  async findInformalni(@Param('id')id:number){
    return this.mikrokredencijalService.findInformalni(id);
  }

    @Get('profesor/:id/mikrokredencijali')
  async findForProfesor(@Param('id')id:number){
    return this.mikrokredencijalService.findByProfesor(id);
  }

}
