import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

const port = 50050;

async function startup(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.listen(port);
}

startup();
