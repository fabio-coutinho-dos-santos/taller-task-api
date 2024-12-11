import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as swaggerUi from 'swagger-ui-express';
import * as fs from 'fs';
import * as yaml from 'yaml';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('/api/v1');
  const swaggerFilePath = './docs/api.yaml';
  const swaggerDocument = yaml.parse(fs.readFileSync(swaggerFilePath, 'utf8'));
  app.use(`/api/v1/doc`, swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  await app.listen(3000);
}
bootstrap();
