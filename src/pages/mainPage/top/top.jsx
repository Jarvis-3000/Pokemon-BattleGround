import React from "react"
import { useDispatch, useSelector } from "react-redux"
import "./top.scss"

import {Link} from "react-router-dom"
import {SocketContext} from "../../../socketConnection/connectSocket"
import * as gameActions from "../../../redux/gameFunctions/actions"

function Top(){
    const [style,setStyle]=React.useState({display:'none'})
    const [idLoading, setIdLoading] = React.useState(false)
    const socket=React.useContext(SocketContext)

    const dispatch=useDispatch()           //useDispatch() for dispatching an action
    const {groupId} = useSelector(state=>state.gameReducer)

    const handleConnectSocket=()=>{
        setIdLoading(true)
        socket.emit("start")
        socket.once("start",({id})=>{
            setStyle({display:'block'})
            setIdLoading(false)
            dispatch(gameActions.setGroupId(id))
        })
    }

    return(
        <div className="top">
            <div className="gameOptions">
                <button className="startGame" onClick={handleConnectSocket}>Start Game</button>
                <Link to="/join"><button className="joinGame">Join Game</button></Link>
            </div>
            <div className="groupId" style={style}>
                {idLoading && <span>Id Loading...</span>}
                {!idLoading && groupId && (
                    <>
                        <div className="share">
                            Share Id
                        </div>
                        <div className="id">
                            {groupId}
                        </div>
                    </>
                )
            </div>

        </div>
    )
}

export default Top
