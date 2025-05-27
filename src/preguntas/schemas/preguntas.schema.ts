import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Pregunta extends Document {
  @Prop()
  enunciado: string;

  @Prop()
  tipo: string;

  @Prop()
  tiempo_limitado: boolean;

  @Prop()
  num_preguntas: number;
}

export const PreguntaSchema = SchemaFactory.createForClass(Pregunta);
