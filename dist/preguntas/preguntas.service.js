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
exports.PreguntasService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const preguntas_schema_1 = require("./schemas/preguntas.schema");
let PreguntasService = class PreguntasService {
    preguntaModel;
    constructor(preguntaModel) {
        this.preguntaModel = preguntaModel;
    }
    async create(createPreguntaDto) {
        const pregunta = new this.preguntaModel(createPreguntaDto);
        return pregunta.save();
    }
    async findAll() {
        return this.preguntaModel.find().exec();
    }
    async findOne(id) {
        return this.preguntaModel.findById(id).exec();
    }
    async update(id, updatePreguntaDto) {
        return this.preguntaModel.findByIdAndUpdate(id, updatePreguntaDto, { new: true }).exec();
    }
    async remove(id) {
        return this.preguntaModel.findByIdAndDelete(id).exec();
    }
};
exports.PreguntasService = PreguntasService;
exports.PreguntasService = PreguntasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(preguntas_schema_1.Pregunta.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PreguntasService);
//# sourceMappingURL=preguntas.service.js.map