import { Document } from 'mongoose';
export declare class Pregunta extends Document {
    enunciado: string;
    tipo: string;
    tiempo_limitado: boolean;
    num_preguntas: number;
}
export declare const PreguntaSchema: import("mongoose").Schema<Pregunta, import("mongoose").Model<Pregunta, any, any, any, Document<unknown, any, Pregunta, any> & Pregunta & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Pregunta, Document<unknown, {}, import("mongoose").FlatRecord<Pregunta>, {}> & import("mongoose").FlatRecord<Pregunta> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
