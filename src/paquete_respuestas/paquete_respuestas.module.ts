import { Module } from '@nestjs/common';
import { PaqueteRespuestasService } from './paquete_respuestas.service';
import { PaqueteRespuestasController } from './paquete_respuestas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PaqueteRespuesta, PaqueteRespuestaSchema } from './schemas/paquete_respuestas.schema';

@Module({
 imports :[
    MongooseModule.forFeature([{ name: PaqueteRespuesta.name, schema: PaqueteRespuestaSchema }])
  ],
  controllers: [PaqueteRespuestasController],
  providers: [PaqueteRespuestasService],
})
export class PaqueteRespuestasModule {}
