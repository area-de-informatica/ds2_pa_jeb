import { CreateReporteAiDto } from './dto/create-reporte_ai.dto';
import { UpdateReporteAiDto } from './dto/update-reporte_ai.dto';
export declare class ReporteAiService {
    create(createReporteAiDto: CreateReporteAiDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateReporteAiDto: UpdateReporteAiDto): string;
    remove(id: number): string;
}
