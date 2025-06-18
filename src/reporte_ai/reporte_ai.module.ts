import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReporteAiService } from './reporte_ai.service';
import { ReporteAi, ReporteAiSchema } from './schemas/reporte_ai.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ReporteAi.name, schema: ReporteAiSchema },
    ]),
  ],
  providers: [ReporteAiService],
})
export class ReporteAiModule {}
