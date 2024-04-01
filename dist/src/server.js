"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Server {
    constructor() {
        this.Port = 3000;
        this.App = (0, express_1.default)();
        this.config();
    }
    config() {
        this.App.use(this.App.json());
        this.App.use();
    }
    lisnner() {
        this.App.listen(this.Port, () => {
            `Server ouvindo na porta ${this.Port}`;
        });
    }
}
exports.default = Server;
