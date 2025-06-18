import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRespuestaDto } from './dto/create-respuesta.dto';
import { UpdateRespuestaDto } from './dto/update-respuesta.dto';
import { Respuesta } from './schemas/respuestas.schema';

@Injectable()
export class RespuestasService {
  constructor(
    @InjectModel(Respuesta.name) private readonly respuestaModel: Model<Respuesta>,
  ) {}

  async create(createRespuestaDto: CreateRespuestaDto): Promise<Respuesta> {
    const respuesta = new this.respuestaModel(createRespuestaDto);
    return respuesta.save();
  }

  async findAll(): Promise<Respuesta[]> {
    return this.respuestaModel.find().exec();
  }

  async findOne(id: string): Promise<Respuesta | null> {
    return this.respuestaModel.findById(id).exec();
  }

  async update(id: string, updateRespuestaDto: UpdateRespuestaDto): Promise<Respuesta | null> {
    return this.respuestaModel.findByIdAndUpdate(id, updateRespuestaDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Respuesta | null> {
    return this.respuestaModel.findByIdAndDelete(id).exec();
  }
}
