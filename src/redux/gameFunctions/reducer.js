import * as actionTypes from "./actionTypes";
import {changeDisabilityUtil} from "./utils"

const INITIAL_STATE = {
  pokemons: [],
  gameStarted: false,
  matchStarted: false,
  groupId: null,
  myCurrentPokemon: "",
  yourCurrentPokemon:'',
  gotMatchResult: true,
  matchResult:'',
  isRoundsFinished:false,
  error:'',
  isJoined:false
};

function gameStateReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_GAME_STARTED:
      return {
        ...state,
        gameStarted: true,
      };

    case actionTypes.TOGGLE_MATCH_STARTED:
      return {
        ...state,
        matchStarted: true,
      };

    case actionTypes.SET_GROUP_ID:
      return {
        ...state,
        groupId: action.payload,
      };

    case actionTypes.ADD_POKEMON:
      return {
        ...state,
        pokemons: [...state.pokemons, action.payload],
      };

    case actionTypes.SET_MY_CURRENT_POKEMON:
      return {
        ...state,
        myCurrentPokemon: action.payload,
      };

    case actionTypes.SET_YOUR_CURRENT_POKEMON:
      return {
        ...state,
        yourCurrentPokemon: action.payload,
      };

    case actionTypes.SET_MATCH_RESULT:
      return {
        ...state,
        matchResult: action.payload,
      };

    case actionTypes.SET_ROUNDS_FINISHED:
      return {
        ...state,
        isRoundsFinished: true,
      };

    case actionTypes.CHNAGE_DISABILITY:
      return {
        ...state,
        pokemons: changeDisabilityUtil({
          ...state,
          name: action.payload.name,
          result: action.payload.result,
        }),
      };

    case actionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case actionTypes.SET_JOINED:
      return {
        ...state,
        isJoined:true,
      };
    default:
      return state;
  }
}


export default gameStateReducer