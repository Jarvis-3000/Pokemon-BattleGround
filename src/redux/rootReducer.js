import { combineReducers } from "redux";

//reducers
import gameStateReducer from "./gameFunctions/reducer"

console.log("I am in root reducer");

const rootReducer = combineReducers({
  // user: userReducer,
  gameReducer:gameStateReducer
});

export default rootReducer;
