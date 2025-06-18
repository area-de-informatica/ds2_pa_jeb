import { Model } from 'mongoose';
import { PaqueteRespuesta } from './schemas/paquete_respuestas.schema';
import { CreatePaqueteRespuestaDto } from './dto/create-paquete_respuesta.dto';
import { UpdatePaqueteRespuestaDto } from './dto/update-paquete_respuesta.dto';
export declare class PaqueteRespuestasService {
    private readonly paqueteModel;
    constructor(paqueteModel: Model<PaqueteRespuesta>);
    create(createDto: CreatePaqueteRespuestaDto): Promise<PaqueteRespuesta>;
    findAll(): Promise<PaqueteRespuesta[]>;
    findOne(id: string): Promise<PaqueteRespuesta | null>;
    update(id: string, updateDto: UpdatePaqueteRespuestaDto): Promise<PaqueteRespuesta | null>;
    remove(id: string): Promise<PaqueteRespuesta | null>;
}
