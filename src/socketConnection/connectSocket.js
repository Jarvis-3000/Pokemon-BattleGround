import React from "react"
import IO from "socket.io-client"
   
export const socket = IO("localhost:5000", {
  transports: ["websocket", "polling", "flashsocket"],
});

export const SocketContext=React.createContext()
