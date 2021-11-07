import React from "react"
import "./startGame.scss"

function StartGame({handleDisplay}){
    return(
        <div className="startBattle">
            <button onClick={handleDisplay}>START</button>
        </div>
    )
}

export default StartGame