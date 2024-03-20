import React from "react";
import IO from "socket.io-client";

const URL = "https://pokemon-battleground-backend.onrender.com/";
// const URL = "http://localhost:5000";

export const socket = IO(URL, {
  transports: ["websocket", "polling", "flashsocket"],
});

export const SocketContext = React.createContext();
