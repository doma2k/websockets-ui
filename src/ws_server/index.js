import { WebSocketServer } from 'ws';

export const wss = new WebSocketServer({ port: 3000 });

let users = [];
let winners = [];
let games = [];

wss.on('connection', function (ws) {

  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.on('message', function (message) {
    let msg = JSON.parse(message)

    if (msg.type === "reg") {
      let userData = JSON.parse(msg.data);
      let { name, password } = userData;
      let user = { name, password };
      users.push(user);

      let responsePlayer = {
        type: "reg",
        data: { name, index: users.length - 1, error: false, errorText: '' },
        id: 0,
      };

      let updateWinners = {
        type: "update_winners",
        data: "winners",
        id: 0,
      };

      let updateRoom = {
        type: "update_room",
        data: games.map((game, index) => {
          return {
            roomId: 1,
            roomUsers: "name",
          };
        }),
        id: 0,
      };

      ws.send(JSON.stringify(responsePlayer));
      ws.send(JSON.stringify(updateRoom));
      ws.send(JSON.stringify(updateWinners));
    }


    // More command handlers here...
  });
});
