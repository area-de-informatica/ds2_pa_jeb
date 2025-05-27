import { Test, TestingModule } from '@nestjs/testing';
import { ReporteAiService } from './reporte_ai.service';

describe('ReporteAiService', () => {
  let service: ReporteAiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReporteAiService],
    }).compile();

    service = module.get<ReporteAiService>(ReporteAiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
