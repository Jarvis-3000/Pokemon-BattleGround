import React from "react"
import "./header.scss"

import Logo from "../../assets/icons/logo.png"
import Face from "../../assets/icons/face.svg"

function Header(){
    return (
        <div className="header">
            <div className="intro">
                <img src={Logo} alt="logo" className="logo"/>
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