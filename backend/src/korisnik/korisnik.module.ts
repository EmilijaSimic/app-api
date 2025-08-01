import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Korisnik } from './entities/korisnik.entity';
import { KorisnikController } from './korisnik.controller';
import { KorisnikService } from './korisnik.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Korisnik]),
    JwtModule.register({
      secret: 'tvoj_secret_key',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [KorisnikController],
  providers: [KorisnikService],
})
export class KorisnikModule {}
