import { Document } from 'mongoose';
export declare class PaqueteRespuestas extends Document {
    tipo: string;
    valor: string;
}
export declare const PaqueteRespuestasSchema: import("mongoose").Schema<PaqueteRespuestas, import("mongoose").Model<PaqueteRespuestas, any, any, any, Document<unknown, any, PaqueteRespuestas, any> & PaqueteRespuestas & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PaqueteRespuestas, Document<unknown, {}, import("mongoose").FlatRecord<PaqueteRespuestas>, {}> & import("mongoose").FlatRecord<PaqueteRespuestas> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
