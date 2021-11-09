import { combineReducers } from "redux";

//reducers
import gameStateReducer from "./gameFunctions/reducer"

console.log("I am in root reducer");

const rootReducer = combineReducers({
  gameReducer:gameStateReducer
});

export default rootReducer;
