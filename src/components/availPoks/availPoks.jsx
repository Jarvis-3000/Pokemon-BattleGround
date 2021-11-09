import React from "react"
import "./availPoks.scss"

import {useDispatch, useSelector} from "react-redux"
import * as gameActions from "../../redux/gameFunctions/actions"

import {SocketContext} from "../../socketConnection/connectSocket"

function AvailPoks(){
    console.log("yes")
    const dispatch=useDispatch()
    const {pokemons,groupId}=useSelector(store=>store.gameReducer)
    const socket = React.useContext(SocketContext)

    const setCurrentPokemon=(pokemon)=>{
        socket.emit("sendCurrentPokemon",{pokemon:pokemon.image,groupId})
        dispatch(gameActions.setMyCurrentPokemon(pokemon))
    }

    return(
        <div className="availPoksContainer">
            <div className="heading">
                <span className="avail">Available Pokemon</span>
            </div>
            
            <div className="availPoks">
                {
                    pokemons.map(pokemon=>{
                        let Style={
                            opacity:1
                        }
                        if(pokemon.disable){
                            Style.opacity=.4
                            Style.pointerEvents='none'
                        }
                        return(
                            <div className="pok" key={pokemon.name} onClick={()=>setCurrentPokemon(pokemon)} style={Style}>
                                <img src={pokemon.image} alt={pokemon.name} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AvailPoks