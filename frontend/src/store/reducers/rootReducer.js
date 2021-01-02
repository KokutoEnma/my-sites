import { combineReducers } from 'redux';
import ProfileReducer from './profileReducer'
import BlogReducer from './blogReducer'

export default combineReducers({
    profile: ProfileReducer,
    blog: BlogReducer
});