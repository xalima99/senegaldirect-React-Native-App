import {combineReducers} from 'redux';
import postsReducer from './postsReducer';
import CategReducer from './CategReducer'


export default combineReducers({
    post: postsReducer,
    categ:CategReducer
})

