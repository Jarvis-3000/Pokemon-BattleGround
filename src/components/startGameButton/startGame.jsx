import React,{useContext} from "react"
import "./startGame.scss"

import {useSelector} from "react-redux"
import { SocketContext } from "../../socketConnection/connectSocket";

function StartGame(){
    const {groupId}= useSelector(store=>store.gameReducer)
    const socket=useContext(SocketContext)
    
    const handleDisplay=()=>{
        socket.emit("startGame",groupId);    
    }

    return(
        <div className="startBattle">
            <button onClick={handleDisplay}>START</button>
        </div>
    )
}

export default StartGame