import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Usuario extends Document {
  @Prop()
  clave: string;

  @Prop({ unique: true })
  correo: string;

  @Prop()
  sexo: string;

  @Prop()
  edad: number;

  @Prop()
  nombre: string;

  @Prop()
  apellido: string;

  @Prop()
  rol: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);