import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DrugaUstanovaModule } from './druga-ustanova/druga-ustanova.module';
import { DrzavaModule } from './drzava/drzava.module';
import { InstitucijaModule } from './institucija/institucija.module';
import { IzvorModule } from './izvor/izvor.module';
import { KompetencijaModule } from './kompetencija/kompetencija.module';
import { KorisnikModule } from './korisnik/korisnik.module';
import { OdgovornoLiceModule } from './odgovorno-lice/odgovorno-lice.module';
import { PolaznikModule } from './polaznik/polaznik.module';
import { PreduslovModule } from './preduslov/preduslov.module';
import { VisokoskolskaUstanovaModule } from './visokoskolska-ustanova/visokoskolska-ustanova.module';
import { MikrokredencijalModule } from './mikrokredencijal/mikrokredencijal.module';
import { MikrokredencijalPolaznikModule } from './mikrokredencijal-polaznik/mikrokredencijal-polaznik.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      password: 'postgres',
      username: 'postgres',
      host: 'iteh-projekat-postgres',
      database: 'iteh-projekat',
      port: 5432,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    InstitucijaModule,
    VisokoskolskaUstanovaModule,
    KorisnikModule,
    DrzavaModule,
    PolaznikModule,
    OdgovornoLiceModule,
    DrugaUstanovaModule,
    KompetencijaModule,
    IzvorModule,
    PreduslovModule,
    MikrokredencijalModule,
    MikrokredencijalPolaznikModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
