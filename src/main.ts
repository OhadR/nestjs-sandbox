import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const { PORT = 8004 } = process.env;
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(+PORT);
  console.log(`listening on ${PORT}`)
}
bootstrap();
