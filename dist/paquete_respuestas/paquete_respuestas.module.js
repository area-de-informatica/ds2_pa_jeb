"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaqueteRespuestasModule = void 0;
const common_1 = require("@nestjs/common");
const paquete_respuestas_service_1 = require("./paquete_respuestas.service");
const paquete_respuestas_controller_1 = require("./paquete_respuestas.controller");
const mongoose_1 = require("@nestjs/mongoose");
const paquete_respuestas_schema_1 = require("./schemas/paquete_respuestas.schema");
let PaqueteRespuestasModule = class PaqueteRespuestasModule {
};
exports.PaqueteRespuestasModule = PaqueteRespuestasModule;
exports.PaqueteRespuestasModule = PaqueteRespuestasModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: paquete_respuestas_schema_1.PaqueteRespuestas.name, schema: paquete_respuestas_schema_1.PaqueteRespuestasSchema }])
        ],
        controllers: [paquete_respuestas_controller_1.PaqueteRespuestasController],
        providers: [paquete_respuestas_service_1.PaqueteRespuestasService],
    })
], PaqueteRespuestasModule);
//# sourceMappingURL=paquete_respuestas.module.js.map