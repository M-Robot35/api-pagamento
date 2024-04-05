import { Server } from "socket.io";
import http from "http";
import {EventEmitter} from 'node:events'
import { configServer } from "../configServer/configServer";

/**
 * @emits connection
 * @emits disconnect
 */
export const WebsocketEmmiter = new EventEmitter().setMaxListeners(configServer.emmiter_max)

let server_io:Server|null= null;

export const io = (http: http.Server):Server => {
  const io = new Server(http);
  
  io.on("connection", (socket) => {
    console.log("Socket Online ", socket.id);

    WebsocketEmmiter.emit('connection', socket )

    socket.on("disconnect", () => {
      console.log("Socket Online ", socket.id);
      WebsocketEmmiter.emit('disconnect', socket.id )
    });

  });
  
  server_io= io
  return io;
};


export  function getIo():Server{  
  if(!server_io){
    throw new Error('Server IO não inicializado')
  }

  return server_io
}