import { PaqueteRespuestasService } from './paquete_respuestas.service';
import { CreatePaqueteRespuestaDto } from './dto/create-paquete_respuesta.dto';
import { UpdatePaqueteRespuestaDto } from './dto/update-paquete_respuesta.dto';
export declare class PaqueteRespuestasController {
    private readonly paqueteRespuestasService;
    constructor(paqueteRespuestasService: PaqueteRespuestasService);
    create(createPaqueteRespuestaDto: CreatePaqueteRespuestaDto): CreatePaqueteRespuestaDto;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePaqueteRespuestaDto: UpdatePaqueteRespuestaDto): string;
    remove(id: string): string;
}
