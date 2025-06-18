import { Document } from 'mongoose';
export declare class PaqueteRespuesta extends Document {
    tipo: string;
    valor: string;
}
export declare const PaqueteRespuestaSchema: import("mongoose").Schema<PaqueteRespuesta, import("mongoose").Model<PaqueteRespuesta, any, any, any, Document<unknown, any, PaqueteRespuesta, any> & PaqueteRespuesta & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PaqueteRespuesta, Document<unknown, {}, import("mongoose").FlatRecord<PaqueteRespuesta>, {}> & import("mongoose").FlatRecord<PaqueteRespuesta> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
