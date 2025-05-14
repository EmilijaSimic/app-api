import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KorisnikModule } from './korisnik/korisnik.module';
import { DrzavaModule } from './drzava/drzava.module';

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
    KorisnikModule,
    DrzavaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
