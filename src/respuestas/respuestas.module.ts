import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RespuestasService } from './respuestas.service';
import { RespuestasController } from './respuestas.controller';
import { Respuesta, RespuestaSchema } from './schemas/respuestas.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Respuesta.name, schema: RespuestaSchema },
    ]),
  ],
  controllers: [RespuestasController],
  providers: [RespuestasService],
})
export class RespuestasModule {}
