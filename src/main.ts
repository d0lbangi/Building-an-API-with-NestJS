import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

// 유효성 검사 pipe를 만들것이다.
// 우리가 쓰고 싶은 파이프를 NestJS 어플리케이션에게 넘겨줄 것이다.
// npm i class-validator class-transformer 를 설치하는 이유는 class의 유효성을 검사하기 위해서이다.

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
