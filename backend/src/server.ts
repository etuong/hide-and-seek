import express from "express";
import http from "http";
import { Server } from "socket.io";
import { initializeSockets } from "./sockets";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const PORT = process.env.PORT || 8080;

initializeSockets(io);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
