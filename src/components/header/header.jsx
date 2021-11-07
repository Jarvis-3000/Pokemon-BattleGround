import React from "react"
import "./header.scss"

import Logo from "../../assets/icons/logo.png"
import Face from "../../assets/icons/face.svg"
import {Link} from "react-router-dom"

function Header(){
    return (
        <div className="header">
            <div className="intro">
                <Link to="/"><img src={Logo} alt="logo" className="logo"/></Link>
                <span className="heading">Pokemon BattleGround</span>
            </div>
            
            <div className="profile">
                <div className="faceBox">
                    <img src={Face} alt="profile" className="face"/>
                </div>
            </div>
        </div>
    )
}

export default Header