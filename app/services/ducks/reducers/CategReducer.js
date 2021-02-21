import {postsTypes} from '../types';

const categPosts = {
  categories: {},
  more: [],
  favs: [],
  similar: [],
  push: {},
  error: null,
};

export default (state = categPosts, action) => {
  switch (action.type) {
    case postsTypes.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: {
          ...state.categories,
          [action.payload.categoryTitle]: [...action.payload.Catposts],
        },
      };
    case 'more':
      return {
        ...state,
        more: action.payload,
      };
    case 'add':
      return {
        ...state,
        favs: [...state.favs, action.payload],
      };
    case 'delete':
      return {
        ...state,
        favs: state.favs.filter((fav) => fav.id !== action.payload),
      };
    case 'similar':
      return {
        ...state,
        similar: action.payload,
      };
    case 'clean':
      return {
        ...state,
        similar: [],
      };
    case 'push':
      return {
        ...state,
        push: action.payload,
      };
    case 'error':
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
