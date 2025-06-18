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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReporteAiSchema = exports.ReporteAi = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ReporteAi = class ReporteAi extends mongoose_2.Document {
    usuario;
    resultado;
    fecha;
};
exports.ReporteAi = ReporteAi;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ReporteAi.prototype, "usuario", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ReporteAi.prototype, "resultado", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ReporteAi.prototype, "fecha", void 0);
exports.ReporteAi = ReporteAi = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], ReporteAi);
exports.ReporteAiSchema = mongoose_1.SchemaFactory.createForClass(ReporteAi);
//# sourceMappingURL=reporte_ai.schema.js.map