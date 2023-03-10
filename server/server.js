const http = require("http");
const socket = require("socket.io");
const express = require("express");
const app = express();

const server = http.createServer(app);
const io = socket(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("what is socket", socket);
  console.log("socket is active");

  //chat is just a name
  socket.on("chat", (payload) => {
    console.log("what is payload", payload);
    io.emit("chat", payload);
  });
});

//should not uses app.listen()
server.listen(8000, () => console.log("server is listening on port 8000"));
