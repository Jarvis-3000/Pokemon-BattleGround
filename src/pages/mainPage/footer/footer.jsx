import React from "react"
import "./footer.scss"

import Logo from "../../../assets/icons/logo.png"
import Gmail from "../../../assets/icons/gmail.svg"
import Github from "../../../assets/icons/github.svg"
import Linkedin from "../../../assets/icons/linkedin.svg"

import {Link} from "react-router-dom"

function Footer(){
    return (
        <div className="footer">
            <div className="intro">
                <Link to="/"><img src={Logo} alt="logo" className="logo"/></Link>
                <span className="heading">Pokemon BattleGround</span>
            </div>
            <div className="contactProfiles">
                {/* <div>
                    <a href="https://sgaud2001@gmail.com"><img src={Gmail} alt="gmail"/></a>
                </div> */}
                <div>
                    <a href="https://github.com/jarvis-3000"><img src={Github} alt="github"/></a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/satish-3000s/"><img src={Linkedin} alt="linkedin"/></a>
                </div>
            </div>

            <div className="credits">
                <div>
                    <h2>Credits</h2>
                </div>
                <div className="creditLinks">
                    <a href="https://app.diagrams.net">app.diagrams.net</a>
                    <a href="https://www.flaticon.com/">flaticon.com</a>
                    <a href="https://freeicons.io/">freeicons.io</a>
                    <a href="https://freeicons.io/">wallpaperaccess.com</a>
                    <a href="https://pokeapi.co/">pokeapi.co</a>
                    <a href="https://blobs.app/">blobs.app</a>
                </div>
            </div>

            
            <div className="myName">
                Developed By Satish Gaud
            </div>
        </div>
    )
}

export default Footer