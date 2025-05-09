import { io, Socket } from "socket.io-client";

const socket: Socket = io("http://localhost:8080"); // Backend URL

socket.on("connect", () => {
  console.log(`Connected to backend with ID: ${socket.id}`);
});

socket.on("disconnect", () => {
  console.log("Disconnected from backend");
});

export default socket;
