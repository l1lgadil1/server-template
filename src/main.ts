import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: false });

  // share static
  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));

  // swagger configure
  const config = new DocumentBuilder()
    .setTitle('Server ')
    .setDescription('Server API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors({ credentials: true, origin: true });

  await app.listen(7777);
}
bootstrap();
