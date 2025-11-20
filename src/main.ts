import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);
  app.use(cookieParser(config.getOrThrow('COOKIE_SECRET')));
  app.useGlobalPipes( new ValidationPipe({
    transform: true 
  }));
  app.enableCors({
    origin: config.getOrThrow<string>('ALLOWED_ORIGIN'),
    credentials: true,
    exposedHeaders: ['Set-Cookie']
  });
  await app.listen(config.getOrThrow<number>('APP_PORT'));
}
bootstrap();
