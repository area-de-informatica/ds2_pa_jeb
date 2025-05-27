import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Respuesta extends Document {
  @Prop()
  tipo: string;

  @Prop()
  valor: string;
}

export const RespuestaSchema = SchemaFactory.createForClass(Respuesta);
