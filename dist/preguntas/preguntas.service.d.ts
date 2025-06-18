import { Model } from 'mongoose';
import { Pregunta } from './schemas/preguntas.schema';
import { CreatePreguntaDto } from './dto/create-pregunta.dto';
import { UpdatePreguntaDto } from './dto/update-pregunta.dto';
export declare class PreguntasService {
    private readonly preguntaModel;
    constructor(preguntaModel: Model<Pregunta>);
    create(createPreguntaDto: CreatePreguntaDto): Promise<Pregunta>;
    findAll(): Promise<Pregunta[]>;
    findOne(id: string): Promise<Pregunta | null>;
    update(id: string, updatePreguntaDto: UpdatePreguntaDto): Promise<Pregunta | null>;
    remove(id: string): Promise<Pregunta | null>;
}
