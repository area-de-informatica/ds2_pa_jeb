import { Test, TestingModule } from '@nestjs/testing';
import { ReporteAiController } from './reporte_ai.controller';
import { ReporteAiService } from './reporte_ai.service';

describe('ReporteAiController', () => {
  let controller: ReporteAiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReporteAiController],
      providers: [ReporteAiService],
    }).compile();

    controller = module.get<ReporteAiController>(ReporteAiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
