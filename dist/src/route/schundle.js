"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SchundleJobs_controller_1 = __importDefault(require("../controller/SchundleJobs.controller"));
//
const taskJobs = (0, express_1.Router)();
taskJobs.post("/schundle", SchundleJobs_controller_1.default.executeJobs);
exports.default = taskJobs;
/**
 * buscar tarefa unica
 * buscar todas as tarefas
 * alterar tarefa
 * deletar tarefa
 */ 
//# sourceMappingURL=schundle.js.map