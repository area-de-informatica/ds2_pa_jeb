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
exports.PreguntaSchema = exports.Pregunta = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Pregunta = class Pregunta extends mongoose_2.Document {
    enunciado;
    tipo;
    tiempo_limitado;
    num_preguntas;
};
exports.Pregunta = Pregunta;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Pregunta.prototype, "enunciado", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Pregunta.prototype, "tipo", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], Pregunta.prototype, "tiempo_limitado", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Pregunta.prototype, "num_preguntas", void 0);
exports.Pregunta = Pregunta = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Pregunta);
exports.PreguntaSchema = mongoose_1.SchemaFactory.createForClass(Pregunta);
//# sourceMappingURL=preguntas.schema.js.map