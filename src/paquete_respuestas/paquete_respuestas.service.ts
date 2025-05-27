import { Injectable } from '@nestjs/common';
import { CreatePaqueteRespuestaDto } from './dto/create-paquete_respuesta.dto';
import { UpdatePaqueteRespuestaDto } from './dto/update-paquete_respuesta.dto';

@Injectable()
export class PaqueteRespuestasService {
  create(createPaqueteRespuestaDto: CreatePaqueteRespuestaDto) {
    return createPaqueteRespuestaDto;
  }

  findAll() {
    return `This action returns all paqueteRespuestas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paqueteRespuesta`;
  }

  update(id: number, updatePaqueteRespuestaDto: UpdatePaqueteRespuestaDto) {
    return `This action updates a #${id} paqueteRespuesta`;
  }

  remove(id: number) {
    return `This action removes a #${id} paqueteRespuesta`;
  }
}
