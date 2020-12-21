import {postsTypes} from '../types';

const initPost = {
    posts: [],
    isloading: null,
    error: null
}


export default (state = initPost, action) => {
    switch (action.type) {
        case postsTypes.GET_ALL_REQUEST:
            return {
                ...state, 
                isloading: true
            }
        case postsTypes.GET_ALL_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                isloading: false
            }
        case postsTypes.GET_ALL_ERROR:
            return {
                ...state,
                isloading:false,
                error: action.payload.error
            }
        default:
            return state
            break;
    }
}

