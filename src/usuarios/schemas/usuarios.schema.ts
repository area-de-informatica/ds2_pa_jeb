import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Usuario extends Document {
  @Prop()
  nombre: string;

  @Prop()
  apellido: string;

  @Prop()
  correo: string;

  @Prop()
  clave: string;

  @Prop()
  sexo: string;

  @Prop()
  edad: number;

  @Prop()
  rol: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
