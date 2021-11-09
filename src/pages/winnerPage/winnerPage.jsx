import React,{useEffect} from "react";
import "./winnerPage.scss"

import Trophy from "../../assets/images/trophy.png";
import {useHistory} from "react-router-dom"

function WinnerPage() {
    
  const history=useHistory()

  const handleNewGame=()=>{
    history.replace("/")
    window.location.reload()
  }

  return (
    <div className="winnerPage">
      <div>
        <img src={Trophy} alt="trophy" className="trophy" />
        <div className="text">
          <span>Conratulations !!!</span>
          <span>You Won The Game</span>
        </div>
      </div>

      <button className="newGame" onClick={handleNewGame}>Start New Game</button>
    </div>
  );
}

export default WinnerPage;
