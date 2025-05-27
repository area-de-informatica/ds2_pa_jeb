import { Module } from '@nestjs/common';
import { ReporteAiService } from './reporte_ai.service';
import { ReporteAiController } from './reporte_ai.controller';

@Module({
  controllers: [ReporteAiController],
  providers: [ReporteAiService],
})
export class ReporteAiModule {}
