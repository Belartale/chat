import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.setGlobalPrefix('api');
  app.enableCors({
    origin: [
      'http://localhost',
      'http://localhost:3000', // dev
      'http://localhost:5000', // dev
      'http://localhost:5500', // dev
      'http://127.0.0.1:5500',
      'https://belartale-chat.herokuapp.com',
    ],
    credentials: true,
  });
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
