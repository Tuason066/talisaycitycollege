import { GET_POSTS, INCREMENT_POSTS } from '../actions';

const posts_reducer = (state, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.payload };
      break;

    case INCREMENT_POSTS:
      return { ...state, limit: action.payload };

    default:
      break;
  }
};

export default posts_reducer;
