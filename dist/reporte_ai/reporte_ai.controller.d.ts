import { ReporteAiService } from './reporte_ai.service';
import { CreateReporteAiDto } from './dto/create-reporte_ai.dto';
import { UpdateReporteAiDto } from './dto/update-reporte_ai.dto';
export declare class ReporteAiController {
    private readonly reporteAiService;
    constructor(reporteAiService: ReporteAiService);
    create(createReporteAiDto: CreateReporteAiDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateReporteAiDto: UpdateReporteAiDto): string;
    remove(id: string): string;
}
