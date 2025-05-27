"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaqueteRespuestasService = void 0;
const common_1 = require("@nestjs/common");
let PaqueteRespuestasService = class PaqueteRespuestasService {
    create(createPaqueteRespuestaDto) {
        return createPaqueteRespuestaDto;
    }
    findAll() {
        return `This action returns all paqueteRespuestas`;
    }
    findOne(id) {
        return `This action returns a #${id} paqueteRespuesta`;
    }
    update(id, updatePaqueteRespuestaDto) {
        return `This action updates a #${id} paqueteRespuesta`;
    }
    remove(id) {
        return `This action removes a #${id} paqueteRespuesta`;
    }
};
exports.PaqueteRespuestasService = PaqueteRespuestasService;
exports.PaqueteRespuestasService = PaqueteRespuestasService = __decorate([
    (0, common_1.Injectable)()
], PaqueteRespuestasService);
//# sourceMappingURL=paquete_respuestas.service.js.map