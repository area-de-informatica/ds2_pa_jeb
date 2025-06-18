import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Respuesta extends Document {
  @Prop()
  texto: string;

  @Prop()
  correcta: boolean;

  @Prop()
  preguntaId: string;
}

export const RespuestaSchema = SchemaFactory.createForClass(Respuesta);
