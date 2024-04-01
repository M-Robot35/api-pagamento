"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobTime = exports.CronEvents = void 0;
const node_cron_1 = __importDefault(require("node-cron"));
const node_events_1 = require("node:events");
const configServer_1 = require("../configServer/configServer");
/**
 * @emits CRON-CREATE
 * @emits CRON-ERROR
 */
exports.CronEvents = new node_events_1.EventEmitter().setMaxListeners(configServer_1.configServer.emmiter_max);
/**
 * Função para agendar uma tarefa cron.
 * @param time string no formato HH:mm para especificar o horário da tarefa.
 * @param callback função de callback que será executada quando a tarefa for acionada.
 * @param args argumentos opcionais que serão passados para a função de callback.
 * @returns true se o agendamento for bem-sucedido, false caso contrário.
 */
function jobTime(time, callback, args, options) {
    return __awaiter(this, void 0, void 0, function* () {
        let array_cron = ["*", "*", "*", "*", "*"];
        try {
            const regexTime = /^([0-2]\d):([0-5]\d)$/g;
            if (!regexTime.test(time))
                throw new Error("Formato invalido");
            const hora_prepare = time.split(":").reverse();
            const cron_string = array_cron.map((time, index) => {
                var _a;
                return (_a = hora_prepare[index]) !== null && _a !== void 0 ? _a : "*";
            }).join(" ");
            const result = node_cron_1.default.schedule(cron_string, () => callback(args !== null && args !== void 0 ? args : ""), options);
            exports.CronEvents.emit('CRON-CREATE', args);
            return {
                status: true,
                data: args,
                error: null
            };
        }
        catch (err) {
            exports.CronEvents.emit('CRON-ERROR', err);
            return {
                status: false,
                data: args,
                error: 'Formato Inválido'
            };
        }
    });
}
exports.jobTime = jobTime;
//# sourceMappingURL=cronJobs.js.map