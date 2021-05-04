import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // using CORS
  app.enableCors();
  // using process.env to handle the port
  const port = process.env.PORT || 8080;
  await app.listen(port);
}
bootstrap();
