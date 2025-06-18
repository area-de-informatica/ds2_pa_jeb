import { Document } from 'mongoose';
export declare class Test extends Document {
    escrito_por: string;
    cantidad: number;
    fecha: string;
    hora_inicio: string;
    hora_fin: string;
    tiempo_limite: string;
    calificacion: number;
    intentos: number;
}
export declare const TestSchema: import("mongoose").Schema<Test, import("mongoose").Model<Test, any, any, any, Document<unknown, any, Test, any> & Test & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Test, Document<unknown, {}, import("mongoose").FlatRecord<Test>, {}> & import("mongoose").FlatRecord<Test> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
