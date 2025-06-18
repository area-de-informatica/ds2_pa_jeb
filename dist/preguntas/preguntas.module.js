"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreguntasModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const preguntas_service_1 = require("./preguntas.service");
const preguntas_controller_1 = require("./preguntas.controller");
const preguntas_schema_1 = require("./schemas/preguntas.schema");
let PreguntasModule = class PreguntasModule {
};
exports.PreguntasModule = PreguntasModule;
exports.PreguntasModule = PreguntasModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: preguntas_schema_1.Pregunta.name, schema: preguntas_schema_1.PreguntaSchema }]),
        ],
        controllers: [preguntas_controller_1.PreguntasController],
        providers: [preguntas_service_1.PreguntasService],
    })
], PreguntasModule);
//# sourceMappingURL=preguntas.module.js.map