import {postsTypes} from '../types';
import baseUrlApi from '../../api';
import {sanitizePost} from '../../posts';
import {getCategory} from '../../helper';

export const loadArticles = (limit = 15, page = 1) => async (dispatch) => {
  dispatch({type: postsTypes.GET_ALL_REQUEST});
  console.log('GET_ALL_REQUEST');
  const query = `posts?per_page=${limit}&page=${page}&orderby=modified&_embed`;
  console.log(query);

  try {
    const {data} = await baseUrlApi.get(query);
    const posts = await data.map(sanitizePost);

    await dispatch({type: postsTypes.GET_ALL_SUCCESS, payload: posts});
    console.log('GET_ALL_SUCCESS');
  } catch (error) {
    console.log(error);
    dispatch({type: postsTypes.GET_ALL_ERROR, payload: {error}});
    console.log('GET_ALL_ERROR');
  }
};

export const loadCategory = (category, limit = 10, page = 1) => async (dispatch) => {
  const categoryTitle = getCategory(category);
  dispatch({type: postsTypes.GET_CATEGORY_REQUEST});

  console.log('GET_CATEGORY_REQUEST');
  const query = `posts?per_page=${limit}&page=${page}&orderby=modified&_embed${
    category ? `&categories=${category}` : ''
  }`;
  console.log(query);

  try {
    const {data} = await baseUrlApi.get(query);
    
    const Catposts = data.map(sanitizePost);

    dispatch({
      type: postsTypes.GET_CATEGORY_SUCCESS,
      payload: {categoryTitle, Catposts},
    });
    console.log('GET_CATEGORY_SUCCESS');
  } catch (error) {
    console.log(error);
    dispatch({type: 'error', payload: {error}});
    console.log('GET_CATEGORY_ERROR');
  }
};

export const loadMore = (category) => async (dispatch) => {

  dispatch({type: postsTypes.GET_CATEGORY_REQUEST});

  console.log('GET_MORE_REQUEST');
  const query = `posts?per_page=30&page=2&orderby=modified&_embed${
    category ? `&categories=${category}` : ''
  }`;

  try {
    const {data} = await baseUrlApi.get(query);
    const Catposts = await data.map(sanitizePost);

    await dispatch({
      type: 'more',
      payload: Catposts
    });
    console.log('GET_MORE_SUCCESS');
  } catch (error) {
    console.log(error);
    dispatch({type: postsTypes.GET_CATEGORY_ERROR, payload: {error}});
    console.log('GET_MORE_ERROR');
  }
};


export const loadSimilar = (category) => async (dispatch) => {

  console.log('GET_SIMILAR_REQUEST');
  const query = `posts?per_page=5&page=2&orderby=modified&_embed${
    category ? `&categories=${category}` : ''
  }`;

  try {
    const {data} = await baseUrlApi.get(query);
    const Catposts = await data.map(sanitizePost);

    await dispatch({
      type: 'similar',
      payload: Catposts
    });
    console.log('GET_SIMILAR_SUCCESS');
  } catch (error) {
    console.log(error);
    dispatch({type: postsTypes.GET_CATEGORY_ERROR, payload: {error}});
    console.log('GET_SIMILAR_ERROR');
  }
};


export const addLike = (post) => {
  return {
    type: 'add',
    payload: {...post, liked: true}
  }
}

export const deleteLike = (id) => {
  return {
    type: 'delete',
    payload: id
  }
}