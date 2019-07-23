import { FETCH_POST, CREATE_POST} from "./types";
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
    .then(res => res.blogs)
    .then(blog =>
      dispatch({
        type: CREATE_POST,
        payload: blog
      })
    );
};
