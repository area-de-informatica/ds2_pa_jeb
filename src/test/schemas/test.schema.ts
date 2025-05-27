import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Test extends Document {
  @Prop()
  escrito_por: string;

  @Prop()
  cantidad: number;

  @Prop()
  fecha: string;

  @Prop()
  hora_inicio: string;

  @Prop()
  hora_fin: string;

  @Prop()
  tiempo_limite: string;

  @Prop()
  calificacion: number;

  @Prop()
  intentos: number;
}

export const TestSchema = SchemaFactory.createForClass(Test);
