import { PartialType } from '@nestjs/mapped-types';
import { CreatePaqueteRespuestaDto } from './create-paquete_respuesta.dto';

export class UpdatePaqueteRespuestaDto extends PartialType(CreatePaqueteRespuestaDto) {}
