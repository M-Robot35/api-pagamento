import express, { Application } from "express";
import http from "http";
import router from "./route/index";
import cors from "cors";
import { io } from "./service/ws";
import { Server as server_io } from "socket.io";

type OptionsServer = {
  websocket: boolean;
  logs?: boolean;
};

export default class Server {
  private App: Application;
  private server_port: number;
  public server_io: server_io | null = null;

  constructor(readonly options?: OptionsServer) {
    this.App = express();
    this.configure();
    this.server_port = this.port();
  }

  private configure() {
    this.App.use(this.cors());
    this.App.use(express.json());
    this.App.use(express.urlencoded({ extended: false }));
    this.App.use(router);
    this.listen();
  }

  private port() {
    const port_server = Number(process.env.SERVER_PORT_DEFAULT) || 3000;
    return port_server;
  }

  private listen() {
    if (this.options?.websocket == true) {
      const server_websocket = http.createServer(this.App);

      this.server_io = io(server_websocket);

      server_websocket.listen(this.port(), () => {
        if (this.options?.logs)
          console.log(`Server ouvindo na porta wss=on ${this.server_port}`);
      });
      return;
    }

    this.App.listen(this.port(), () => {
      if (this.options?.logs)
        console.log(`Server ouvindo na porta ${this.server_port}`);
    });
  }

  private cors() {
    return cors({ origin: "*" });
  }

  public instanceApp() {
    return this.App;
  }
}
