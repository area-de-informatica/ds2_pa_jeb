import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pregunta } from './schemas/preguntas.schema';
import { CreatePreguntaDto } from './dto/create-pregunta.dto';
import { UpdatePreguntaDto } from './dto/update-pregunta.dto';

@Injectable()
export class PreguntasService {
  constructor(
    @InjectModel(Pregunta.name) private readonly preguntaModel: Model<Pregunta>,
  ) {}

  async create(createPreguntaDto: CreatePreguntaDto): Promise<Pregunta> {
    const pregunta = new this.preguntaModel(createPreguntaDto);
    return pregunta.save();
  }

  async findAll(): Promise<Pregunta[]> {
    return this.preguntaModel.find().exec();
  }

  async findOne(id: string): Promise<Pregunta | null> {
    return this.preguntaModel.findById(id).exec();
  }

  async update(id: string, updatePreguntaDto: UpdatePreguntaDto): Promise<Pregunta | null> {
    return this.preguntaModel.findByIdAndUpdate(id, updatePreguntaDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Pregunta | null> {
    return this.preguntaModel.findByIdAndDelete(id).exec();
  }
}
