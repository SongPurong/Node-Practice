const WebSocket = require("ws"); // 引入WebSocket模块
const WebSocketServer = WebSocket.Server; // 引入Server类
const wss = new WebSocketServer({
  port: 3000, // 实例化一个3000端口的WebSocket Server
});

wss.on("connection", (ws) => {
  console.log(`[SERVER] connection()`);
  ws.on("message", (message) => {
    console.log(`[SERVER] Received: ${message}`);
    ws.send(`ECHO: ${message}`, (err) => {
      if (err) {
        console.log(`[SERVER] error: ${err}`);
      }
    });
  });
});
