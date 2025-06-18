import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PreguntasService } from './preguntas.service';
import { PreguntasController } from './preguntas.controller';
import { Pregunta, PreguntaSchema } from './schemas/preguntas.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Pregunta.name, schema: PreguntaSchema }]),
  ],
  controllers: [PreguntasController],
  providers: [PreguntasService],
})
export class PreguntasModule {}
