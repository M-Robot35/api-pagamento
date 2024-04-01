"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = exports.WebsocketEmmiter = void 0;
const socket_io_1 = require("socket.io");
const node_events_1 = require("node:events");
const configServer_1 = require("../configServer/configServer");
/**
 * @emits connection
 * @emits disconnect
 */
exports.WebsocketEmmiter = new node_events_1.EventEmitter().setMaxListeners(configServer_1.configServer.emmiter_max);
const io = (http) => {
    const io = new socket_io_1.Server(http);
    io.on("connection", (socket) => {
        console.log("Socket Online ", socket.id);
        exports.WebsocketEmmiter.emit('connection', socket);
        socket.on("disconnect", () => {
            console.log("Socket Online ", socket.id);
            exports.WebsocketEmmiter.emit('disconnect', socket.id);
        });
        // io.to(openSocket.get(sockID)).emit("done", event)
    });
    return io;
};
exports.io = io;
exports.WebsocketEmmiter.on('connection', (event) => {
    event.id;
});
//# sourceMappingURL=ws.js.map