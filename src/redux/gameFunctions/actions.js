import * as actionTypes from "./actionTypes";
import axios from "axios";

export const toggleGameStarted = () => {
  return {
    type: actionTypes.TOGGLE_GAME_STARTED
  };
};

export const toggleMatchStarted = () => {
  return {
    type: actionTypes.TOGGLE_MATCH_STARTED
  };
};

export const setGroupId = (payload) => {
  return {
    type: actionTypes.SET_GROUP_ID,
    payload,
  };
};


export const addPokemon = (payload) => {
  return async function (dispatch) {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${payload}`
      );
      let pokemon={
              name: res.data.name,
              height: res.data.height,
              weight: res.data.weight,
              image: res.data.sprites.other.dream_world.front_default,
              disable: false,
              win:false
            }
      console.log(pokemon)
      dispatch({
        type: actionTypes.ADD_POKEMON,
        payload: pokemon,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const setMyCurrentPokemon = (payload) => {
  return {
    type: actionTypes.SET_MY_CURRENT_POKEMON,
    payload,
  };
};
export const setYourCurrentPokemon = (payload) => {
  return {
    type: actionTypes.SET_YOUR_CURRENT_POKEMON,
    payload,
  };
};
export const setMatchResult = (payload) => {
  return {
    type: actionTypes.SET_MATCH_RESULT,
    payload,
  };
};
export const setRoundsFinished= () => {
  return {
    type: actionTypes.SET_ROUNDS_FINISHED,
  };
};
export const changeDisability = (payload) => {
  return {
    type: actionTypes.CHNAGE_DISABILITY,
    payload
  };
};

export const setError=(payload)=>{
  return{
    type:actionTypes.SET_ERROR,
    payload
  }
}

export const setJoined = () => {
  return {
    type: actionTypes.SET_JOINED
  };
};