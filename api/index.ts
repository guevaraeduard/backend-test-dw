import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';

let app;

async function bootstrap() {
  if (!app) {
    app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api');
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        // forbidNonWhitelisted: true,
      })
    );
    app.enableCors({
      origin: true,
      allowedHeaders: 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe, Access-Control-Allow-Origin, Authorization',
      methods: "GET,PATCH,POST,DELETE,UPDATE,OPTIONS",
      credentials: true,
    });
    await app.listen(process.env.PORT ?? 3001);
  }
  return app;
}

// Para Vercel serverless
export default async function handler(req, res) {
  const app = await bootstrap();
  const expressApp = app.getHttpAdapter().getInstance();
  return expressApp(req, res);
}

// Para desarrollo local
if (process.env.NODE_ENV !== 'production') {
  bootstrap();
} 