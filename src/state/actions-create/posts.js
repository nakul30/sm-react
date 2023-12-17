// import posts from "../reducers/post-reducer";
import {UPDATE_POSTS} from "../actions-create/actionTypes.js"
export const fetchPosts = () => (dispatch) => {
    const url = "https://codeial.codingninjas.com:8000/api/v2/posts?page=1&limit=5";
    fetch(url)
      .then((response) => {
        // console.log('response :', response);
        return response.json() ; 
      }).then((data ) =>{ 
        console.log(data) ; 
        dispatch(upDatePosts(data.data.posts))                 // to add posts to the store that i am getting in the console 
      }) ; 
  };
  
export const upDatePosts =(posts) =>{ 
    return { 
        type : UPDATE_POSTS, 
        posts 
    }
}

