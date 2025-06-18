"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RespuestasService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const respuestas_schema_1 = require("./schemas/respuestas.schema");
let RespuestasService = class RespuestasService {
    respuestaModel;
    constructor(respuestaModel) {
        this.respuestaModel = respuestaModel;
    }
    async create(createRespuestaDto) {
        const respuesta = new this.respuestaModel(createRespuestaDto);
        return respuesta.save();
    }
    async findAll() {
        return this.respuestaModel.find().exec();
    }
    async findOne(id) {
        return this.respuestaModel.findById(id).exec();
    }
    async update(id, updateRespuestaDto) {
        return this.respuestaModel.findByIdAndUpdate(id, updateRespuestaDto, { new: true }).exec();
    }
    async remove(id) {
        return this.respuestaModel.findByIdAndDelete(id).exec();
    }
};
exports.RespuestasService = RespuestasService;
exports.RespuestasService = RespuestasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(respuestas_schema_1.Respuesta.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RespuestasService);
//# sourceMappingURL=respuestas.service.js.map