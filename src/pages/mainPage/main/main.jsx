import React from "react"
import "./main.scss"

import Top from "../top/top"
import Body from "../body/body"
import Footer from "../footer/footer"


function Main(){
    return(
        <div className="main">
            <Top/>
            <Body/>
            <Footer/>
        </div>
    )
}

export default Main