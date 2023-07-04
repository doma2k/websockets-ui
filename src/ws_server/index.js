import { WebSocketServer } from 'ws';

export const wss = new WebSocketServer({ port: 3000 });

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    const incomingData = JSON.parse(data)
    console.log(incomingData);

  });
  ws.send('something');
});
