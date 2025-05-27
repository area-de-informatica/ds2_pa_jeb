import { CreatePaqueteRespuestaDto } from './dto/create-paquete_respuesta.dto';
import { UpdatePaqueteRespuestaDto } from './dto/update-paquete_respuesta.dto';
export declare class PaqueteRespuestasService {
    create(createPaqueteRespuestaDto: CreatePaqueteRespuestaDto): CreatePaqueteRespuestaDto;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePaqueteRespuestaDto: UpdatePaqueteRespuestaDto): string;
    remove(id: number): string;
}
