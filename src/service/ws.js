"use strict";
exports.__esModule = true;
exports.io = exports.WebsocketEmmiter = void 0;
var socket_io_1 = require("socket.io");
var node_events_1 = require("node:events");
var configServer_1 = require("../configServer/configServer");
/**
 * @emits connection
 * @emits disconnect
 */
exports.WebsocketEmmiter = new node_events_1.EventEmitter().setMaxListeners(configServer_1.configServer.emmiter_max);
var io = function (http) {
    var io = new socket_io_1.Server(http);
    io.on("connection", function (socket) {
        console.log("Socket Online ", socket.id);
        exports.WebsocketEmmiter.emit('connection', socket);
        socket.on("disconnect", function () {
            console.log("Socket Online ", socket.id);
            exports.WebsocketEmmiter.emit('disconnect', socket.id);
        });
        // io.to(openSocket.get(sockID)).emit("done", event)
    });
    return io;
};
exports.io = io;
exports.WebsocketEmmiter.on('connection', function (event) {
    event.id;
});
