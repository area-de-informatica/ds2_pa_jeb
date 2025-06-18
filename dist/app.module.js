"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const usuarios_module_1 = require("./usuarios/usuarios.module");
const preguntas_module_1 = require("./preguntas/preguntas.module");
const paquete_respuestas_module_1 = require("./paquete_respuestas/paquete_respuestas.module");
const reporte_ai_module_1 = require("./reporte_ai/reporte_ai.module");
const test_module_1 = require("./test/test.module");
const respuestas_module_1 = require("./respuestas/respuestas.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async () => ({
                    uri: process.env.DB_URI,
                }),
                inject: [],
            }),
            usuarios_module_1.UsuariosModule,
            preguntas_module_1.PreguntasModule,
            paquete_respuestas_module_1.PaqueteRespuestasModule,
            reporte_ai_module_1.ReporteAiModule,
            test_module_1.TestModule,
            respuestas_module_1.RespuestasModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map