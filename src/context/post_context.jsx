import { createContext, useContext, useReducer } from 'react';
import { GET_POSTS, INCREMENT_POSTS} from '../actions';
import reducer from '../reducer/posts_reducer';

const PostsContext = createContext();

const initialState = {
  posts: [],
  limit: 6,
};

const PostsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPosts = () => {
    import('../data').then((module) => {
      dispatch({ type: GET_POSTS, payload: module.posts });
    });
  };

  const incrementPosts = () => {
    dispatch({
      type: INCREMENT_POSTS,
      payload:
        state.limit > state.posts.length ? state.posts.length : state.limit + 6,
    });
  };

  return (
    <PostsContext.Provider
      value={{ ...state, getPosts, incrementPosts }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export const usePostContext = () => useContext(PostsContext);

export default PostsProvider;
