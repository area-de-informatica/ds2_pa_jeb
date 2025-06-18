import { Document } from 'mongoose';
export declare class Usuario extends Document {
    nombre: string;
    apellido: string;
    correo: string;
    clave: string;
    sexo: string;
    edad: number;
    rol: string;
}
export declare const UsuarioSchema: import("mongoose").Schema<Usuario, import("mongoose").Model<Usuario, any, any, any, Document<unknown, any, Usuario, any> & Usuario & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Usuario, Document<unknown, {}, import("mongoose").FlatRecord<Usuario>, {}> & import("mongoose").FlatRecord<Usuario> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
