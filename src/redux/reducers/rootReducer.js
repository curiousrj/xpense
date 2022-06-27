import { combineReducers } from "redux";
import { xpenseReducer } from "./xpenseReducer";
const reducer = combineReducers({
    xpense: xpenseReducer,
});