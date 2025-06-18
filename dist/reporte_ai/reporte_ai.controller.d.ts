import { Model } from 'mongoose';
import { CreateReporteAiDto } from './dto/create-reporte_ai.dto';
import { UpdateReporteAiDto } from './dto/update-reporte_ai.dto';
import { ReporteAi } from './schemas/reporte_ai.schema';
export declare class ReporteAiService {
    private readonly reporteModel;
    constructor(reporteModel: Model<ReporteAi>);
    create(createReporteAiDto: CreateReporteAiDto): Promise<ReporteAi>;
    findAll(): Promise<ReporteAi[]>;
    findOne(id: string): Promise<ReporteAi | null>;
    update(id: string, dto: UpdateReporteAiDto): Promise<ReporteAi | null>;
    remove(id: string): Promise<ReporteAi | null>;
}
