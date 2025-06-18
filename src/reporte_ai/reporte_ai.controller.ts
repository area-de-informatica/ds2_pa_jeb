import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReporteAiDto } from './dto/create-reporte_ai.dto';
import { UpdateReporteAiDto } from './dto/update-reporte_ai.dto';
import { ReporteAi } from './schemas/reporte_ai.schema';


@Injectable()
export class ReporteAiService {
  constructor(
    @InjectModel(ReporteAi.name) private readonly reporteModel: Model<ReporteAi>,
  ) {}

  async create(createReporteAiDto: CreateReporteAiDto): Promise<ReporteAi> {
    const reporte = new this.reporteModel(createReporteAiDto);
    return reporte.save();
  }

  async findAll(): Promise<ReporteAi[]> {
    return this.reporteModel.find().exec();
  }

  async findOne(id: string): Promise<ReporteAi | null> {
    return this.reporteModel.findById(id).exec();
  }

  async update(id: string, dto: UpdateReporteAiDto): Promise<ReporteAi | null> {
    return this.reporteModel.findByIdAndUpdate(id, dto, { new: true }).exec();
  }

  async remove(id: string): Promise<ReporteAi | null> {
    return this.reporteModel.findByIdAndDelete(id).exec();
  }
}
