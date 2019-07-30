import { FETCH_POST, CREATE_POST, CREATED_POST, EDIT_POST } from "../actions/types";

const initialState = {
  blogs: [],
  blog: {},
  editedBlog: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POST:
      // console.log("postReducer is called");
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
      case  EDIT_POST:
      console.log("postReducer/edit_post is called");
      alert("Blog is edited successfully!");
      return {
        ...state
      };
    default:
      return state;
  }
}
