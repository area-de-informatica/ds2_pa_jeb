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
exports.ReporteAiService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const reporte_ai_schema_1 = require("./schemas/reporte_ai.schema");
let ReporteAiService = class ReporteAiService {
    reporteModel;
    constructor(reporteModel) {
        this.reporteModel = reporteModel;
    }
    async create(createReporteAiDto) {
        const reporte = new this.reporteModel(createReporteAiDto);
        return reporte.save();
    }
    async findAll() {
        return this.reporteModel.find().exec();
    }
    async findOne(id) {
        return this.reporteModel.findById(id).exec();
    }
    async update(id, dto) {
        return this.reporteModel.findByIdAndUpdate(id, dto, { new: true }).exec();
    }
    async remove(id) {
        return this.reporteModel.findByIdAndDelete(id).exec();
    }
};
exports.ReporteAiService = ReporteAiService;
exports.ReporteAiService = ReporteAiService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(reporte_ai_schema_1.ReporteAi.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ReporteAiService);
//# sourceMappingURL=reporte_ai.service.js.map