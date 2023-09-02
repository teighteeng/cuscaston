import { Reducer } from 'redux'
import { PostAction, PostState, FETCH_POSTS_SUCCESS, ADD_POST, LIKE_POST } from './types'

const initialState: PostState = {
  posts: [],
  error: null,
}

const postReducer: Reducer<PostState, PostAction> = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return { ...state, posts: action.payload, error: null }
    case FETCH_POSTS_FAILURE:
      return { ...state, posts: [], error: action.payload }
    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] }
    case LIKE_POST:
      // Update the liked post in the posts array
      const updatedPosts = state.posts.map(post =>
        post.id === action.payload ? { ...post, liked: true } : post
      )
      return { ...state, posts: updatedPosts }
    default:
      return state
  }
}

export default postReducer