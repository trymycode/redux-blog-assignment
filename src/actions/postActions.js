import { FETCH_POST, CREATE_POST, CREATED_POST, EDIT_POST } from "./types";
import axios from "axios";
export const fetchPosts = () => dispatch => {
  console.log("fetchpost action is called");
  axios
    .get(`http://test.peppersquare.com/api/v1/article`)
    .then(res => res.data)
    .then(blogs =>
      dispatch({
        type: FETCH_POST,
        payload: blogs
      })
    );
};

export const createPost = newBlog => dispatch => {
  console.log("createpost action is called");
  axios
    .post("http://test.peppersquare.com/api/v1/article", newBlog)
    .then(() =>
      axios
        .get("http://test.peppersquare.com/api/v1/article")
        .then(blog => blog.data)
        .then(blog =>
          dispatch({
            type: CREATE_POST,
            payload: blog
          })
        )
    )

    .catch(err => console.log("error", err));
};

export const editPost = (editedBlog) => dispatch =>{
  console.log("editPost action is called");
  axios.post("http://test.peppersquare.com/api/v1/article", editedBlog)
  .then(blog => blog.data)
  .then(blog => dispatch({
    type: EDIT_POST,
    payload: blog
  }))
 
  .catch(err => console.log("Error", err))
}

export const createdPost = () => {
  return {
    type: CREATED_POST
  };
};
