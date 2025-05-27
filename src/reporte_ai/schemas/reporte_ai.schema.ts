import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class ReporteAI extends Document {
  @Prop()
  retroalimentacion: string;

  @Prop()
  calificacion: number;
}

export const ReporteAISchema = SchemaFactory.createForClass(ReporteAI);
