import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';


@Module({
    imports:[
        TypeOrmModule.forRootAsync({useFactory: (configService:ConfigService)=>({
            type:'mysql',
            host: configService.getOrThrow('MYSQL_HOST'),
            database: configService.getOrThrow('MYSQL_DATABASE'),
            username:configService.getOrThrow('MYSQL_USERNAME'),
            password:configService.getOrThrow('MYSQL_PASSWORD'),
            port:configService.getOrThrow('MYSQL_PORT'),
        }),
        inject:[ConfigService],
        }), 
    ],
})
export class DatabaseModule {}
