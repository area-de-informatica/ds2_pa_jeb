import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Pregunta, PreguntaSchema } from './schemas/preguntas.schema';
import { PreguntasService } from './preguntas.service';
import { PreguntasController } from './preguntas.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Pregunta.name, schema: PreguntaSchema },
    ]),
  ],
  controllers: [PreguntasController],
  providers: [PreguntasService],
})
export class PreguntasModule {}
