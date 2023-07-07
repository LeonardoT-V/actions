"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluacionModule = void 0;
const common_1 = require("@nestjs/common");
const evaluacion_service_1 = require("./evaluacion.service");
const evaluacion_controller_1 = require("./evaluacion.controller");
const typeorm_1 = require("@nestjs/typeorm");
const evaluacion_entity_1 = require("./entities/evaluacion.entity");
let EvaluacionModule = class EvaluacionModule {
};
EvaluacionModule = __decorate([
    (0, common_1.Module)({
        controllers: [evaluacion_controller_1.EvaluacionController],
        providers: [evaluacion_service_1.EvaluacionService],
        imports: [typeorm_1.TypeOrmModule.forFeature([
                evaluacion_entity_1.Evaluacion
            ])]
    })
], EvaluacionModule);
exports.EvaluacionModule = EvaluacionModule;
//# sourceMappingURL=evaluacion.module.js.map