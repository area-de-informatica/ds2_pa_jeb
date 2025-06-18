import { Document } from 'mongoose';
export declare class Usuario extends Document {
    clave: string;
    correo: string;
    sexo: string;
    edad: number;
    nombre: string;
    apellido: string;
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
