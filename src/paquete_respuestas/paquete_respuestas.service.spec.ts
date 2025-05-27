import { Test, TestingModule } from '@nestjs/testing';
import { PaqueteRespuestasService } from './paquete_respuestas.service';

describe('PaqueteRespuestasService', () => {
  let service: PaqueteRespuestasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaqueteRespuestasService],
    }).compile();

    service = module.get<PaqueteRespuestasService>(PaqueteRespuestasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
