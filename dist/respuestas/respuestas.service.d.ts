import { Model } from 'mongoose';
import { CreateRespuestaDto } from './dto/create-respuesta.dto';
import { UpdateRespuestaDto } from './dto/update-respuesta.dto';
import { Respuesta } from './schemas/respuestas.schema';
export declare class RespuestasService {
    private readonly respuestaModel;
    constructor(respuestaModel: Model<Respuesta>);
    create(createRespuestaDto: CreateRespuestaDto): Promise<Respuesta>;
    findAll(): Promise<Respuesta[]>;
    findOne(id: string): Promise<Respuesta | null>;
    update(id: string, updateRespuestaDto: UpdateRespuestaDto): Promise<Respuesta | null>;
    remove(id: string): Promise<Respuesta | null>;
}
