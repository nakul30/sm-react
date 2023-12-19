import { combineReducers } from "redux";
import posts from './post-reducer'
import auth from "./auth-reducer";
export default combineReducers({
    // amount : amountreducer,-_ _ _ 
    // ___ : ____  
    posts,
    auth,
})