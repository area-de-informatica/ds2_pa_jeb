import { CreatePreguntaDto } from './dto/create-pregunta.dto';
import { UpdatePreguntaDto } from './dto/update-pregunta.dto';
export declare class PreguntasService {
    create(createPreguntaDto: CreatePreguntaDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePreguntaDto: UpdatePreguntaDto): string;
    remove(id: number): string;
}
