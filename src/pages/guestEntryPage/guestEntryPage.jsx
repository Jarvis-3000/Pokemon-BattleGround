import React, {useState} from "react"
import "./guestEntryPage.scss"

function GuestEntryPage(){

    const [input, setInput] = useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("Going to enter",input)
    }

    return(
        <div className="guestEntryPage">
            <div className="bgImage"></div>
            <form onSubmit={handleSubmit} className="form">
                <label>Enter Joining Id</label>
                <input 
                    type="text" 
                    value={input} 
                    placeholder="joining id..." 
                    onChange={(e)=>setInput(e.target.value)}
                />
                <button type="submit">ENTER</button>
            </form>
        </div>
    )
}

export default GuestEntryPage