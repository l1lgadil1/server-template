import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: false });

  // make static visible
  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));

  // swagger configure
  const config = new DocumentBuilder()
    .setTitle('API DOCS')
    .setDescription('docs description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors({ credentials: true, origin: true });

  await app.listen(7777);
}
bootstrap();
