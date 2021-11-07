import React from "react"
import "./availPoks.scss"

import Face from "../../assets/icons/face.svg"

function AvailPoks(){
    console.log("yes")
    return(
        <div className="availPoksContainer">
            <div className="heading">
                <span className="avail">Available Pokemon</span>
            </div>
            
            <div className="availPoks">
                <div className="pok">
                    <img src={Face} alt="pokemon" className="pok"/>
                </div>
            </div>
        </div>
    )
}

export default AvailPoks