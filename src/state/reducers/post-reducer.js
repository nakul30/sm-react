import { UPDATE_POSTS } from "../actions-create/actionTypes";

// import { act } from "react-dom/test-utils";

export default function posts(state = [], action){
    switch(action.type){
        case UPDATE_POSTS : 
            return action.posts ; 
        default :
            return state 
    }
    return state;
};
  