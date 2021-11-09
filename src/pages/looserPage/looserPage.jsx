import React from "react";
import "./looserPage.scss";

import sadPokemon from "../../assets/images/sad_pokemon.png"
import {useHistory} from "react-router-dom"

function LooserPage() {
  const history=useHistory()

  const handleNewGame=()=>{
    history.replace("/")
    window.location.reload()
  }

  return (
    <div className="looserPage">
      <div>
        <img src={sadPokemon} alt="sadPokemon" className="sadPokemon" />
        <div className="text">
          <span>Oops!!!</span>
          <span>You Lost The Game</span>
          <span>Better Luck Next Time</span>
        </div>
      </div>

      <button className="newGame" onClick={handleNewGame}>Start New Game</button>
    </div>
  );
}

export default LooserPage;
