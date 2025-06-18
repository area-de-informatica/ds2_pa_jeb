import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class ReporteAi extends Document {
  @Prop()
  usuario: string;

  @Prop()
  resultado: string;

  @Prop()
  fecha: string;
}

export const ReporteAiSchema = SchemaFactory.createForClass(ReporteAi);
