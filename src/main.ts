import { NestFactory } from '@nestjs/core';
import { ComputerModule } from './computer/computer.module';

async function bootstrap() {
  const app = await NestFactory.create(ComputerModule);

  await app.listen(3000);
}
// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
