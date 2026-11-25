const WebSocket = require("ws");
const webServer = new WebSocket.Server({ port: 3000 });

webServer.on("connection", (socket) => {
  socket.on("message", (msg) => [
    // socket.send("message "+msg)
    webServer.clients.forEach((client) => {
      client.send("message " + msg);
    }),
  ]);
  socket.on("error", (err) => [console.log(err)]);
  socket.on("close", () => {
    console.log("Socket disconnected");
  });
});
