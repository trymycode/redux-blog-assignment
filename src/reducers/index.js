// this is the rootReducer
import {combineReducers} from "redux";
import postReducer from './postReducer';

export default combineReducers({
    // we are calling postReducer as postReducer
    postReducer: postReducer
})