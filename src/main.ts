import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost',
      'http://localhost:3000', // dev
      'http://localhost:5000', // dev
      'http://localhost:5500', // dev
    ],
    credentials: true,
  });
  await app.listen(process.env.PORT || 5000);
}
bootstrap();
