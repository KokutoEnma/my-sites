import { combineReducers } from 'redux';
import ProfileReducer from './profileReducer'
import BlogReducer from './blogReducer'
import ChatReducer from './chatReducer'

export default combineReducers({
    profile: ProfileReducer,
    blog: BlogReducer,
    chat: ChatReducer
});