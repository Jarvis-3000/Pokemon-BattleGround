import React, {useState} from "react"
import "./joinPage.scss"
import {useDispatch, useSelector} from "react-redux"

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
        console.log("Going to enter",input)
        socket.emit("join",input)
        socket.once("join",(res)=>{
            if(res.valid && !res.roomFull){
                history.push("/battle")     //redirecting to battle page
                console.log("dispatching to setGroupId")
                dispatch(gameActions.setGroupId(input))
            }
            else if(!res.valid){
                alert(`Not valid id`)
            }
            else{
                alert('Room is full')
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