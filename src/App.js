import React from "react"
import "./App.scss"

import Header from "./components/header/header"
import Main from "./pages/mainPage/main/main"
import GuestEntryPage from "./pages/guestEntryPage/guestEntryPage"

function App(){
    return(
        <div className="app">
            <Header/>
            {/* <Main/> */}
            <GuestEntryPage/>
        </div>
    )
}

export default App