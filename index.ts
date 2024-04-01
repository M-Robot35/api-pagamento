import dotenv from "dotenv";
dotenv.config();

import Server from "./src/server";

const App = new Server({
  websocket: true,
  logs: true,
});

export const io = App.server_io;

io?.on("connection", (event) => {
  console.log(event);
  console.log("tudo certo krio");
});
