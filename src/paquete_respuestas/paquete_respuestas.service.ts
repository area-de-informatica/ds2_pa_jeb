import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaqueteRespuesta } from './schemas/paquete_respuestas.schema';
import { CreatePaqueteRespuestaDto } from './dto/create-paquete_respuesta.dto';
import { UpdatePaqueteRespuestaDto } from './dto/update-paquete_respuesta.dto';

@Injectable()
export class PaqueteRespuestasService {
  constructor(
    @InjectModel(PaqueteRespuesta.name)
    private readonly paqueteModel: Model<PaqueteRespuesta>,
  ) {}

  async create(createDto: CreatePaqueteRespuestaDto): Promise<PaqueteRespuesta> {
    const paquete = new this.paqueteModel(createDto);
    return paquete.save();
  }

  async findAll(): Promise<PaqueteRespuesta[]> {
    return this.paqueteModel.find().exec();
  }

  async findOne(id: string): Promise<PaqueteRespuesta | null> {
    return this.paqueteModel.findById(id).exec();
  }

  async update(id: string, updateDto: UpdatePaqueteRespuestaDto): Promise<PaqueteRespuesta | null> {
    return this.paqueteModel.findByIdAndUpdate(id, updateDto, { new: true }).exec();
  }

  async remove(id: string): Promise<PaqueteRespuesta | null> {
    return this.paqueteModel.findByIdAndDelete(id).exec();
  }
}
