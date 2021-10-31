import React from "react"
import "./App.scss"

import Header from "./components/header/header"
import Main from "./pages/mainPage/main/main"

function App(){
    return(
        <div className="app">
            <Header/>
            <Main/>
        </div>
    )
}

export default App