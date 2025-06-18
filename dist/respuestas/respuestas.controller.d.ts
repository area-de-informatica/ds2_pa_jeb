import { RespuestasService } from './respuestas.service';
import { CreateRespuestaDto } from './dto/create-respuesta.dto';
import { UpdateRespuestaDto } from './dto/update-respuesta.dto';
export declare class RespuestasController {
    private readonly respuestasService;
    constructor(respuestasService: RespuestasService);
    create(createRespuestaDto: CreateRespuestaDto): Promise<import("./schemas/respuestas.schema").Respuesta>;
    findAll(): Promise<import("./schemas/respuestas.schema").Respuesta[]>;
    findOne(id: string): Promise<import("./schemas/respuestas.schema").Respuesta | null>;
    update(id: string, updateRespuestaDto: UpdateRespuestaDto): Promise<import("./schemas/respuestas.schema").Respuesta | null>;
    remove(id: string): Promise<import("./schemas/respuestas.schema").Respuesta | null>;
}
