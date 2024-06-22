import { Server } from "socket.io";

export default async function handler(req: any, res: any) {
  if (!res.socket.server.io) {
    const httpServer = res.socket.server;
    const io = new Server(httpServer);

    io.on("connection", (socket) => {
      console.log("Client connected");
      socket.on("disconnect", () => {
        console.log("Client disconnected");
      });

      socket.on("broadcastMessage", (message) => {
        io.emit("serverMessage", message);
      });
    });

    res.socket.server.io = io;
  }
  res.end();
}
