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
exports.PaqueteRespuestasController = void 0;
const common_1 = require("@nestjs/common");
const paquete_respuestas_service_1 = require("./paquete_respuestas.service");
const create_paquete_respuesta_dto_1 = require("./dto/create-paquete_respuesta.dto");
const update_paquete_respuesta_dto_1 = require("./dto/update-paquete_respuesta.dto");
let PaqueteRespuestasController = class PaqueteRespuestasController {
    paqueteRespuestasService;
    constructor(paqueteRespuestasService) {
        this.paqueteRespuestasService = paqueteRespuestasService;
    }
    create(createPaqueteRespuestaDto) {
        return this.paqueteRespuestasService.create(createPaqueteRespuestaDto);
    }
    findAll() {
        return this.paqueteRespuestasService.findAll();
    }
    findOne(id) {
        return this.paqueteRespuestasService.findOne(+id);
    }
    update(id, updatePaqueteRespuestaDto) {
        return this.paqueteRespuestasService.update(+id, updatePaqueteRespuestaDto);
    }
    remove(id) {
        return this.paqueteRespuestasService.remove(+id);
    }
};
exports.PaqueteRespuestasController = PaqueteRespuestasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_paquete_respuesta_dto_1.CreatePaqueteRespuestaDto]),
    __metadata("design:returntype", void 0)
], PaqueteRespuestasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PaqueteRespuestasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaqueteRespuestasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_paquete_respuesta_dto_1.UpdatePaqueteRespuestaDto]),
    __metadata("design:returntype", void 0)
], PaqueteRespuestasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaqueteRespuestasController.prototype, "remove", null);
exports.PaqueteRespuestasController = PaqueteRespuestasController = __decorate([
    (0, common_1.Controller)('paquete-respuestas'),
    __metadata("design:paramtypes", [paquete_respuestas_service_1.PaqueteRespuestasService])
], PaqueteRespuestasController);
//# sourceMappingURL=paquete_respuestas.controller.js.map