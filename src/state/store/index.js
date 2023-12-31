import { createStore } from "redux";
import { applyMiddleware } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import reducer from '../reducers/index';

let store ; 
export function configureStore (){
    store = createStore(reducer, applyMiddleware(thunk , logger)) ; 
    return store ; 
}