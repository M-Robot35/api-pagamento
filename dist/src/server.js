"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const index_1 = __importDefault(require("./route/index"));
const cors_1 = __importDefault(require("cors"));
const ws_1 = require("./service/ws");
class Server {
    constructor(options) {
        this.options = options;
        this.server_io = null;
        this.App = (0, express_1.default)();
        this.configure();
        this.server_port = this.port();
    }
    configure() {
        this.App.use(this.cors());
        this.App.use(express_1.default.json());
        this.App.use(express_1.default.urlencoded({ extended: false }));
        this.App.use(index_1.default);
        this.listen();
    }
    port() {
        const port_server = Number(process.env.SERVER_PORT_DEFAULT) || 3000;
        return port_server;
    }
    listen() {
        var _a;
        if (((_a = this.options) === null || _a === void 0 ? void 0 : _a.websocket) == true) {
            const server_websocket = http_1.default.createServer(this.App);
            this.server_io = (0, ws_1.io)(server_websocket);
            server_websocket.listen(this.port(), () => {
                var _a;
                if ((_a = this.options) === null || _a === void 0 ? void 0 : _a.logs)
                    console.log(`Server ouvindo na porta wss=on ${this.server_port}`);
            });
            return;
        }
        this.App.listen(this.port(), () => {
            var _a;
            if ((_a = this.options) === null || _a === void 0 ? void 0 : _a.logs)
                console.log(`Server ouvindo na porta ${this.server_port}`);
        });
    }
    cors() {
        return (0, cors_1.default)({ origin: "*" });
    }
    instanceApp() {
        return this.App;
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map