import { Document } from 'mongoose';
export declare class Respuesta extends Document {
    tipo: string;
    valor: string;
}
export declare const RespuestaSchema: import("mongoose").Schema<Respuesta, import("mongoose").Model<Respuesta, any, any, any, Document<unknown, any, Respuesta, any> & Respuesta & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Respuesta, Document<unknown, {}, import("mongoose").FlatRecord<Respuesta>, {}> & import("mongoose").FlatRecord<Respuesta> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
