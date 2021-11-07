import React from "react"
import "./battlePage.scss"

import playerBG from "../../assets/images/playerBG.svg"
import Logo from "../../assets/icons/logo.png"


function BattlePage(){

    const dummyPokemon=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg`
    const player="Satish"

    return(
        <div className="battlePage">
            <div className="gameInfo">
                <button>Info</button>
                <div className="infos">
                    <p>Select one of the pokemon in your Pokemon List</p>
                    <p>Let your oponent select his/her pokemon.</p>
                    <p>Click On the center pokeball for start the battle round.</p>
                </div>
            </div>

            <div className="toggleSection">
                <div className="congrats">
                    {`Great Played ${player}`}
                </div>
                <button className="nextRound">{`NEXT ROUND`}</button>
            </div>

            <div className="battleSection">
                <div className="player">
                    <img src={playerBG} alt="playerBackGroundSVG" className="svgShape"/>
                    <img src={dummyPokemon} alt="player pokemon"/>
                </div>
                
                <div className="playerSeparator">
                    <span className="line"></span>
                    <button>
                        <img src={Logo} alt="playButton"/>
                    </button>
                </div>
                
                <div className="player">
                    <img src={playerBG} alt="playerBackGroundSVG" className="svgShape"/>
                    <img src={dummyPokemon} alt="player pokemon"/>
                </div>
            </div>
        </div>
    )
}

export default BattlePage