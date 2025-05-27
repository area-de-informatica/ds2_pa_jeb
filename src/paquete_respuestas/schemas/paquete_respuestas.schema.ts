import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class PaqueteRespuesta extends Document {
  @Prop()
  tipo: string;

  @Prop()
  valor: string;
}

export const PaqueteRespuestaSchema = SchemaFactory.createForClass(PaqueteRespuesta);
