import { Module } from '@nestjs/common';
import { JwtModule as NestJwtModule } from '@nestjs/jwt';
import { JwtAuthService } from './jwt-auth.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [JwtAuthService],
  exports: [JwtAuthService, NestJwtModule],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    NestJwtModule.register({
      secret: process.env.JWT_ACCESS_SECRET,
    }),
  ],

})
export class JwtAuthModule { }