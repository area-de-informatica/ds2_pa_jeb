import { Module } from '@nestjs/common';
import { PaqueteRespuestasService } from './paquete_respuestas.service';
import { PaqueteRespuestasController } from './paquete_respuestas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PaqueteRespuestas, PaqueteRespuestasSchema } from './schemas/paquete_respuestas.schema';

@Module({
 imports :[
    MongooseModule.forFeature([{ name: PaqueteRespuestas.name, schema: PaqueteRespuestasSchema }])
  ],
  controllers: [PaqueteRespuestasController],
  providers: [PaqueteRespuestasService],
})
export class PaqueteRespuestasModule {}
