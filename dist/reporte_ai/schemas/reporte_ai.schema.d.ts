import { Document } from 'mongoose';
export declare class ReporteAi extends Document {
    usuario: string;
    resultado: string;
    fecha: string;
}
export declare const ReporteAiSchema: import("mongoose").Schema<ReporteAi, import("mongoose").Model<ReporteAi, any, any, any, Document<unknown, any, ReporteAi, any> & ReporteAi & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ReporteAi, Document<unknown, {}, import("mongoose").FlatRecord<ReporteAi>, {}> & import("mongoose").FlatRecord<ReporteAi> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
