// this is the rootReducer
import { combineReducers } from "redux";
import postReducer from "./postReducer";
import { modelReducer, formReducer } from 'react-redux-form';

const initialUserState = {
  title: '',
  description: '',
  tags:[''],
  author:'',
  image:''
};
export default combineReducers({
  // we are calling postReducer as postReducer
  postReducer,
  user: modelReducer('user', initialUserState),
  userForm: formReducer('user', initialUserState)
});
