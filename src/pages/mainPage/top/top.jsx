import React from "react"
import "./top.scss"

import Battle from "../../../assets/images/battle.jpg"

function Top(){
    return(
        <div className="top">
            <div className="gameOptions">
                <button className="startGame">Start Game</button>
                <button className="joinGame">Join Game</button>
            </div>
        </div>
    )
}

export default Top