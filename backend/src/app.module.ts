import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DrzavaModule } from './drzava/drzava.module';
import { InstitucijaModule } from './institucija/institucija.module';
import { KorisnikModule } from './korisnik/korisnik.module';
import { VisokoskolskaUstanovaModule } from './visokoskolska-ustanova/visokoskolska-ustanova.module';
import { PolaznikModule } from './polaznik/polaznik.module';
import { OdgovornoLiceModule } from './odgovorno-lice/odgovorno-lice.module';
import { DrugaUstanovaModule } from './druga-ustanova/druga-ustanova.module';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
