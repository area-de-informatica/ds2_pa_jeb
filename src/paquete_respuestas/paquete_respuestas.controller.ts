import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaqueteRespuestasService } from './paquete_respuestas.service';
import { CreatePaqueteRespuestaDto } from './dto/create-paquete_respuesta.dto';
import { UpdatePaqueteRespuestaDto } from './dto/update-paquete_respuesta.dto';

@Controller('paquete-respuestas')
export class PaqueteRespuestasController {
  constructor(private readonly paqueteRespuestasService: PaqueteRespuestasService) {}

  @Post()
  create(@Body() createPaqueteRespuestaDto: CreatePaqueteRespuestaDto) {
    return this.paqueteRespuestasService.create(createPaqueteRespuestaDto);
  }

  @Get()
  findAll() {
    return this.paqueteRespuestasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paqueteRespuestasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaqueteRespuestaDto: UpdatePaqueteRespuestaDto) {
    return this.paqueteRespuestasService.update(+id, updatePaqueteRespuestaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paqueteRespuestasService.remove(+id);
  }
}
