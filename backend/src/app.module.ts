import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InstitucijaModule } from './institucija/institucija.module';
import { VisokoskolskaUstanovaModule } from './visokoskolska-ustanova/visokoskolska-ustanova.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      password: 'postgres',
      username: 'postgres',
      host: 'iteh-projekat-postgres',
      database: 'iteh-projekat',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    InstitucijaModule,
    VisokoskolskaUstanovaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
