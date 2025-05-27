import { Injectable } from '@nestjs/common';
import { CreateReporteAiDto } from './dto/create-reporte_ai.dto';
import { UpdateReporteAiDto } from './dto/update-reporte_ai.dto';

@Injectable()
export class ReporteAiService {
  create(createReporteAiDto: CreateReporteAiDto) {
    return 'This action adds a new reporteAi';
  }

  findAll() {
    return `This action returns all reporteAi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reporteAi`;
  }

  update(id: number, updateReporteAiDto: UpdateReporteAiDto) {
    return `This action updates a #${id} reporteAi`;
  }

  remove(id: number) {
    return `This action removes a #${id} reporteAi`;
  }
}
