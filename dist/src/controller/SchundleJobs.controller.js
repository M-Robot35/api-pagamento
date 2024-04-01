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
Object.defineProperty(exports, "__esModule", { value: true });
const cronJobs_1 = require("../helpers/cronJobs");
class SchundleJobs {
    constructor() { }
    executeJobs(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { datetime, mensagem } = req.body;
            const teste = (args) => console.log("tudo certo kraio: => ", args);
            const time = yield (0, cronJobs_1.jobTime)(datetime, teste, {
                nome: "Thiago Teles ownit",
                time: datetime,
                mensagem
            });
            res.json(time);
            res.json({ type: 'tudo certo - SchundleJobs' });
        });
    }
}
exports.default = new SchundleJobs();
//# sourceMappingURL=SchundleJobs.controller.js.map