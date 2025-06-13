import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Korisnik } from './entities/korisnik.entity';
import { KorisnikController } from './korisnik.controller';
import { KorisnikService } from './korisnik.service';

@Module({
  imports: [TypeOrmModule.forFeature([Korisnik])],
  controllers: [KorisnikController],
  providers: [KorisnikService],
})
export class KorisnikModule {}
