import React from "react"
import "./top.scss"

import {Link} from "react-router-dom"
import {SocketContext} from "../../../socketConnection/connectSocket"

function Top(){
    const [id,setId]= React.useState('')
    const [style,setStyle]=React.useState({display:'none'})
    const socket=React.useContext(SocketContext)

    const handleConnectSocket=()=>{
        socket.emit("start")
        socket.once("start",({id})=>{
            setId(id)
            setStyle({display:'block'})
        })
    }

    return(
        <div className="top">
            <div className="gameOptions">
                <button className="startGame" onClick={handleConnectSocket}>Start Game</button>
                <Link to="/join"><button className="joinGame">Join Game</button></Link>
            </div>
            <div className="groupId" style={style}>
                <div className="share">
                    Share Id
                </div>
                <div className="id">
                    {id}
                </div>
            </div>

        </div>
    )
}

export default Top