import { Document } from 'mongoose';
export declare class ReporteAI extends Document {
    retroalimentacion: string;
    calificacion: number;
}
export declare const ReporteAISchema: import("mongoose").Schema<ReporteAI, import("mongoose").Model<ReporteAI, any, any, any, Document<unknown, any, ReporteAI, any> & ReporteAI & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ReporteAI, Document<unknown, {}, import("mongoose").FlatRecord<ReporteAI>, {}> & import("mongoose").FlatRecord<ReporteAI> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
