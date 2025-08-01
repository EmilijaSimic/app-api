import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateKorisnikDto } from './dto/create-korisnik.dto';
import { UpdateKorisnikDto } from './dto/update-korisnik.dto';
import { Korisnik } from './entities/korisnik.entity';

@Injectable()
export class KorisnikService {
  constructor(
    @InjectRepository(Korisnik)
    private readonly korisnikRepository: Repository<Korisnik>,
    private jwtService: JwtService,
  ) {}

  async validate(email: string, lozinka: string): Promise<Korisnik | null> {
    const korisnik = await this.korisnikRepository.findOne({
      where: { email, lozinka },
    });
    if (!korisnik) return null;

    return korisnik;
  }

  async login(email: string, lozinka: string) {
    const korisnik = await this.validate(email, lozinka);
    if (!korisnik)
      throw new UnauthorizedException('Neispravan email ili lozinka');

    const payload = { sub: korisnik.id, tipKorisnika: korisnik.tipKorisnika };

    return {
      korisnik,
      access_token: this.jwtService.sign(payload),
    };
  }

  create(createKorisnikDto: CreateKorisnikDto) {
    return this.korisnikRepository.find();
  }

  findAll() {
    return `This action returns all korisnik`;
  }

  findOne(id: number) {
    return `This action returns a #${id} korisnik`;
  }

  update(id: number, updateKorisnikDto: UpdateKorisnikDto) {
    return `This action updates a #${id} korisnik`;
  }

  remove(id: number) {
    return `This action removes a #${id} korisnik`;
  }
}
