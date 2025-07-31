import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateKorisnikDto } from './dto/create-korisnik.dto';
import { LoginKorisnikDto } from './dto/login-korisnik.dto';
import { UpdateKorisnikDto } from './dto/update-korisnik.dto';
import { KorisnikService } from './korisnik.service';

@Controller('korisnik')
export class KorisnikController {
  constructor(private readonly korisnikService: KorisnikService) {}

  @Post('login')
  async login(@Body() loginKorisnikDto: LoginKorisnikDto) {
    return this.korisnikService.login(
      loginKorisnikDto.email,
      loginKorisnikDto.lozinka,
    );
  }

  @Post()
  create(@Body() createKorisnikDto: CreateKorisnikDto) {
    return this.korisnikService.create(createKorisnikDto);
  }

  @Get()
  findAll() {
    return this.korisnikService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.korisnikService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateKorisnikDto: UpdateKorisnikDto,
  ) {
    return this.korisnikService.update(+id, updateKorisnikDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.korisnikService.remove(+id);
  }
}
