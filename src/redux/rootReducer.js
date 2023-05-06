import { combineReducers } from "redux";

//reducers
import gameStateReducer from "./gameFunctions/reducer"


const rootReducer = combineReducers({
  gameReducer:gameStateReducer
});

export default rootReducer;
