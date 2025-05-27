import { Test, TestingModule } from '@nestjs/testing';
import { PaqueteRespuestasController } from './paquete_respuestas.controller';
import { PaqueteRespuestasService } from './paquete_respuestas.service';

describe('PaqueteRespuestasController', () => {
  let controller: PaqueteRespuestasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaqueteRespuestasController],
      providers: [PaqueteRespuestasService],
    }).compile();

    controller = module.get<PaqueteRespuestasController>(PaqueteRespuestasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
