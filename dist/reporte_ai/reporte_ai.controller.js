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
exports.ReporteAiController = void 0;
const common_1 = require("@nestjs/common");
const reporte_ai_service_1 = require("./reporte_ai.service");
const create_reporte_ai_dto_1 = require("./dto/create-reporte_ai.dto");
const update_reporte_ai_dto_1 = require("./dto/update-reporte_ai.dto");
let ReporteAiController = class ReporteAiController {
    reporteAiService;
    constructor(reporteAiService) {
        this.reporteAiService = reporteAiService;
    }
    create(createReporteAiDto) {
        return this.reporteAiService.create(createReporteAiDto);
    }
    findAll() {
        return this.reporteAiService.findAll();
    }
    findOne(id) {
        return this.reporteAiService.findOne(+id);
    }
    update(id, updateReporteAiDto) {
        return this.reporteAiService.update(+id, updateReporteAiDto);
    }
    remove(id) {
        return this.reporteAiService.remove(+id);
    }
};
exports.ReporteAiController = ReporteAiController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reporte_ai_dto_1.CreateReporteAiDto]),
    __metadata("design:returntype", void 0)
], ReporteAiController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReporteAiController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReporteAiController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_reporte_ai_dto_1.UpdateReporteAiDto]),
    __metadata("design:returntype", void 0)
], ReporteAiController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReporteAiController.prototype, "remove", null);
exports.ReporteAiController = ReporteAiController = __decorate([
    (0, common_1.Controller)('reporte-ai'),
    __metadata("design:paramtypes", [reporte_ai_service_1.ReporteAiService])
], ReporteAiController);
//# sourceMappingURL=reporte_ai.controller.js.map