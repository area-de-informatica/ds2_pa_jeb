import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('JEB')
    .setDescription('La aplicacion')
    .setVersion('1.0')
    .addTag('jeb')
    .build();

  const document = SwaggerModule.createDocument(app, config); // ✅ CORRECTO
  SwaggerModule.setup('api', app, document); // ✅ Enrutado correctamente

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
