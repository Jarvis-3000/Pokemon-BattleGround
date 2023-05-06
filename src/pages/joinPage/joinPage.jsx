import React, {useState} from "react"
import "./joinPage.scss"
import {useDispatch} from "react-redux"

import { useHistory } from "react-router-dom"
import {SocketContext} from "../../socketConnection/connectSocket"

import * as gameActions from "../../redux/gameFunctions/actions"

function GuestEntryPage(){

    const history=useHistory()
    const socket = React.useContext(SocketContext)
    const [input, setInput] = useState('')
    const dispatch=useDispatch()

    const handleSubmit=(e)=>{
        e.preventDefault()

        socket.emit("join",input)
        socket.once("join",({msg})=>{
            if(msg){
                dispatch(gameActions.setGroupId(input))
                dispatch(gameActions.setJoined())
                //redirecting to battle page
                history.push("/battle")     
            }
        })
    }

    return(
        <div className="guestEntryPage">
            <div className="bgImage"></div>
            <form onSubmit={handleSubmit} className="form">
                <label>Enter Joining Id</label>
                <input 
                    type="text" 
                    value={input} 
                    placeholder="dgqhh2h@fne80jwfn$" 
                    onChange={(e)=>setInput(e.target.value)}
                />
                <button type="submit">ENTER</button>
            </form>
        </div>
    )
}

export default GuestEntryPage