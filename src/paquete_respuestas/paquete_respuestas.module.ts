import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PaqueteRespuestasService } from './paquete_respuestas.service';
import { PaqueteRespuestasController } from './paquete_respuestas.controller';
import { PaqueteRespuesta, PaqueteRespuestaSchema } from './schemas/paquete_respuestas.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PaqueteRespuesta.name, schema: PaqueteRespuestaSchema },
    ]),
  ],
  controllers: [PaqueteRespuestasController],
  providers: [PaqueteRespuestasService],
})
export class PaqueteRespuestasModule {}
