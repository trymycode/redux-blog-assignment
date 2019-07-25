import { FETCH_POST, CREATE_POST, CREATED_POST } from "../actions/types";

const initialState = {
  blogs: [],
  blog: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POST:
      console.log("postReducer is called");
      return {
        ...state,
        blogs: action.payload
      };
    case CREATE_POST:
      console.log("postReducer/create_post is called");
      return {
        ...state,
        blogs: action.payload
      };
    case CREATED_POST:
      console.log("postReducer/created_post is called");
      alert("Blog is posted successfully!");
      return {
        ...state
      };
    default:
      return state;
  }
}
