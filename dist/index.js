"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const server_1 = __importDefault(require("./src/server"));
const App = new server_1.default({
    websocket: true,
    logs: true,
});
exports.io = App.server_io;
exports.io === null || exports.io === void 0 ? void 0 : exports.io.on("connection", (event) => {
    console.log(event);
    console.log("tudo certo krio");
});
//# sourceMappingURL=index.js.map