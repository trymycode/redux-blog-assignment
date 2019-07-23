import { FETCH_POST, CREATE_POST, MOST_POPULAR_POST } from "../actions/types";

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
        blog: action.payload
      };
    default:
      return state;
  }
}
