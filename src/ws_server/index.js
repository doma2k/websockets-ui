import { WebSocketServer } from 'ws';

export const wss = new WebSocketServer({ port: 3000 });

wss.on('connection', function (ws) {

  ws.on('message', function (message) {
    console.log('received: %s', message);
    let x = message.toString()
    ws.send(x)
  });
  

});

