import { PaqueteRespuestasService } from './paquete_respuestas.service';
import { CreatePaqueteRespuestaDto } from './dto/create-paquete_respuesta.dto';
import { UpdatePaqueteRespuestaDto } from './dto/update-paquete_respuesta.dto';
export declare class PaqueteRespuestasController {
    private readonly paqueteRespuestasService;
    constructor(paqueteRespuestasService: PaqueteRespuestasService);
    create(createPaqueteRespuestaDto: CreatePaqueteRespuestaDto): Promise<import("./schemas/paquete_respuestas.schema").PaqueteRespuesta>;
    findAll(): Promise<import("./schemas/paquete_respuestas.schema").PaqueteRespuesta[]>;
    findOne(id: string): Promise<import("./schemas/paquete_respuestas.schema").PaqueteRespuesta | null>;
    update(id: string, updatePaqueteRespuestaDto: UpdatePaqueteRespuestaDto): Promise<import("./schemas/paquete_respuestas.schema").PaqueteRespuesta | null>;
    remove(id: string): Promise<import("./schemas/paquete_respuestas.schema").PaqueteRespuesta | null>;
}
