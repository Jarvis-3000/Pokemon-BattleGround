import React from "react";
import "./winnerPage.scss";

import Trophy from "../../assets/images/trophy.png";

function WinnerPage() {
  return (
    <div className="winnerPage">
      <div>
        <img src={Trophy} alt="trophy" className="trophy" />
        <div className="text">
          <span>Conratulations !!!</span>
          <span>You Won The Game</span>
        </div>
      </div>

      <button className="newGame">Start New Game</button>
    </div>
  );
}

export default WinnerPage;
