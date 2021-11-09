import React from "react"
import IO from "socket.io-client"
   
export const socket = IO("https://pokemon-battleground-backend.herokuapp.com/", {
  transports: ["websocket", "polling", "flashsocket"],
});

export const SocketContext=React.createContext()
