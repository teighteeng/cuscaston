import axios from 'axios'
import { Dispatch } from 'redux'
import { FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE, ADD_POST, LIKE_POST } from './types'

export const fetchPosts = () => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get('/api/posts')
    const posts = response.data;
    dispatch({ type: FETCH_POSTS_SUCCESS, payload: posts })
  } catch (error) {
    dispatch({ type: FETCH_POSTS_FAILURE, payload: error.message })
  }
}

export const likePost = (postId: string) => (dispatch: Dispatch) => {
  dispatch({ type: LIKE_POST, payload: postId })
}