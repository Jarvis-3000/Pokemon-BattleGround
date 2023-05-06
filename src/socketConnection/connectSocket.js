import React from "react";
import IO from "socket.io-client";

const URL = "https://pokemonbattlegroundbackend-production.up.railway.app/";
// const URL = "http://localhost:5000";

export const socket = IO(URL, {
  transports: ["websocket", "polling", "flashsocket"],
});

export const SocketContext = React.createContext();
