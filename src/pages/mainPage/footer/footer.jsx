import React from "react"
import "./footer.scss"

import Logo from "../../../assets/icons/logo.png"
import Gmail from "../../../assets/icons/gmail.svg"
import Github from "../../../assets/icons/github.svg"
import Linkedin from "../../../assets/icons/linkedin.svg"

function Footer(){
    return (
        <div className="footer">
            <div className="intro">
                <img src={Logo} alt="logo" className="logo"/>
                <span className="heading">Pokemon BattleGround</span>
            </div>
            <div className="contactProfiles">
                <div>
                    <a href="https://sgaud2001@gmail.com"><img src={Gmail} alt="gmail"/></a>
                </div>
                <div>
                    <a href="https://github.com/jarvis-3000"><img src={Github} alt="github"/></a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/satish-3000s/"><img src={Linkedin} alt="linkedin"/></a>
                </div>
            </div>
        </div>
    )
}

export default Footer