import { PreguntasService } from './preguntas.service';
import { CreatePreguntaDto } from './dto/create-pregunta.dto';
import { UpdatePreguntaDto } from './dto/update-pregunta.dto';
export declare class PreguntasController {
    private readonly preguntasService;
    constructor(preguntasService: PreguntasService);
    create(createPreguntaDto: CreatePreguntaDto): CreatePreguntaDto;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePreguntaDto: UpdatePreguntaDto): string;
    remove(id: string): string;
}
