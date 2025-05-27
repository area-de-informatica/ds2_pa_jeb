import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReporteAiService } from './reporte_ai.service';
import { CreateReporteAiDto } from './dto/create-reporte_ai.dto';
import { UpdateReporteAiDto } from './dto/update-reporte_ai.dto';

@Controller('reporte-ai')
export class ReporteAiController {
  constructor(private readonly reporteAiService: ReporteAiService) {}

  @Post()
  create(@Body() createReporteAiDto: CreateReporteAiDto) {
    return this.reporteAiService.create(createReporteAiDto);
  }

  @Get()
  findAll() {
    return this.reporteAiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reporteAiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReporteAiDto: UpdateReporteAiDto) {
    return this.reporteAiService.update(+id, updateReporteAiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reporteAiService.remove(+id);
  }
}
