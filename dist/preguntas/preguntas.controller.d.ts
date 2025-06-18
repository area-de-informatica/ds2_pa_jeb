import { PreguntasService } from './preguntas.service';
import { CreatePreguntaDto } from './dto/create-pregunta.dto';
import { UpdatePreguntaDto } from './dto/update-pregunta.dto';
export declare class PreguntasController {
    private readonly preguntasService;
    constructor(preguntasService: PreguntasService);
    create(createPreguntaDto: CreatePreguntaDto): Promise<import("./schemas/preguntas.schema").Pregunta>;
    findAll(): Promise<import("./schemas/preguntas.schema").Pregunta[]>;
    findOne(id: string): Promise<import("./schemas/preguntas.schema").Pregunta | null>;
    update(id: string, updatePreguntaDto: UpdatePreguntaDto): Promise<import("./schemas/preguntas.schema").Pregunta | null>;
    remove(id: string): Promise<import("./schemas/preguntas.schema").Pregunta | null>;
}
