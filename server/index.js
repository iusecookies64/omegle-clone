const { randomUUID } = require("crypto");
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "*",
    },
});

let users = [];

app.use(express.static("public"));

function createRoom(socket1, socket2) {
    // creating a random room for both the sockets
    const roomId = randomUUID();
    socket1.join(roomId);
    socket2.join(roomId);

    socket1.emit("joiningRoom", roomId);
    socket2.emit("joiningRoom", roomId);

    // asking socket1 to create an offer
    socket1.emit("createOffer");
}

io.on("connection", (socket) => {
    socket.on("joinLobby", () => {
        users.push(socket);
        if (users.length >= 2) {
            const socket1 = users.pop();
            const socket2 = users.pop();
            createRoom(socket1, socket2);
        }
    });

    socket.on("offer", (offer, roomId) => {
        socket.to(roomId).emit("offer", offer);
    });

    socket.on("candidate", (candidate, roomId) => {
        socket.to(roomId).emit("candidate", candidate);
    });

    socket.on("answer", (answer, roomId) => {
        socket.to(roomId).emit("answer", answer);
    });

    socket.on("nextRoom", (roomId) => {
        socket.to(roomId).emit("peerLeaving");
        socket.leave(roomId);
    });

    socket.on("leaveLobby", (roomId) => {
        socket.to(roomId).emit("peerLeaving");
        users = users.filter((user) => user != socket);
    });

    // text chat interactions
    socket.on("message", (roomId, content) => {
        socket.to(roomId).emit("strangerMessage", content);
    });
});

httpServer.listen(3000);
