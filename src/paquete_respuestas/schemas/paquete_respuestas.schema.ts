import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class PaqueteRespuestas extends Document {
  @Prop()
  tipo: string;

  @Prop()
  valor: string;
}

export const PaqueteRespuestasSchema = SchemaFactory.createForClass(PaqueteRespuestas);
