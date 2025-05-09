import { DefaultEventsMap, Server, ServerOptions } from "socket.io";

export const initializeSockets = (
  io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>
) => {
  io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on("message", (data) => {
      console.log(`Message received: ${data}`);
      // Handle incoming messages
      io.emit("message", data); // Broadcast message to all clients
    });

    socket.on("disconnect", () => {
      console.log(`User disconnected: ${socket.id}`);
    });
  });
};
