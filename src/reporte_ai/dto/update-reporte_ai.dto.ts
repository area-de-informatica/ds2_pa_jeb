import { PartialType } from '@nestjs/mapped-types';
import { CreateReporteAiDto } from './create-reporte_ai.dto';

export class UpdateReporteAiDto extends PartialType(CreateReporteAiDto) {}
