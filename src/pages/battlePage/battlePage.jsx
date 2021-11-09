import React, { useState, useEffect } from "react"
import "./battlePage.scss"

import playerBG from "../../assets/images/playerBG.svg"
import Logo from "../../assets/icons/logo.png"
import { useSelector } from "react-redux"

import { SocketContext } from "../../socketConnection/connectSocket"
import { useDispatch } from "react-redux"
import * as gameActions from "../../redux/gameFunctions/actions"

function BattlePage() {
    const dummyPokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg`
    const [display, setDisplay] = useState({ display: 'none' })
    const [disable, setDisable] = useState({ pointerEvents: 'none', opacity: .3 })
    const dispatch = useDispatch()
    const { myCurrentPokemon, yourCurrentPokemon, groupId, matchResult, isRoundsFinished, pokemons, matchStarted } = useSelector(store => store.gameReducer)
    const socket = React.useContext(SocketContext)

    const handleMatchResult = () => {
        if (myCurrentPokemon != "" && !myCurrentPokemon.disable) {
            socket.emit("matchStart", ({ groupId, details: myCurrentPokemon }))
        }
        else {
            // alert()
            dispatch(gameActions.setError("Already used. Try another"));
        }
        // console.log("changing disability")
    }

    useEffect(() => {
        if (matchStarted) {
            setDisable({
                visibility: '1'
            })
        }
        return setDisable({
                visibility: '1'
            })
    }, [matchStarted])

    useEffect(() => {
        if (isRoundsFinished) {
            // console.warn("disabling match button")
            setDisable({
                pointerEvents: 'none',
                opacity: .3
            })
        }
        return setDisable({
                pointerEvents: 'none',
                opacity: .3
            })
    }, [isRoundsFinished])

    useEffect(() => {
        if (matchStarted) {
            setDisplay({ display: 'block' })
            setTimeout(() => {
                setDisplay({ display: 'none' })
            }, 2000)
        }
        return setDisplay({ display: 'block' })
    }, [pokemons])

    return (
        <div className="battlePage">
            <div className="gameInfo">
                <button>Info</button>
                <div className="infos">
                    <p>Select one of the pokemon in your Pokemon List</p>
                    <p>Let your oponent select his/her pokemon.</p>
                    <p>Click On the center pokeball for start the battle round.</p>
                    <p>Always change the selected pokemon</p>
                </div>
            </div>

            {
                (matchResult !== "") ?
                    (
                        <div className="toggleSection" style={display}>
                            <div className="congrats">
                                !! {matchResult} !!
                            </div>
                        </div>
                    ) :
                    null
            }

            <div className="battleSection">
                <div className="player">
                    <img src={playerBG} alt="playerBackGroundSVG" className="svgShape" />
                    <img src={myCurrentPokemon.image || dummyPokemon} alt="player pokemon" />
                </div>

                <div className="playerSeparator" onClick={handleMatchResult} style={disable}>
                    <span className="line"></span>
                    <button >
                        <img src={Logo} alt="playButton" />
                    </button>
                </div>

                <div className="player">
                    <img src={playerBG} alt="playerBackGroundSVG" className="svgShape" />
                    <img src={yourCurrentPokemon || dummyPokemon} alt="player pokemon" />
                </div>
            </div>
        </div>
    )
}

export default BattlePage