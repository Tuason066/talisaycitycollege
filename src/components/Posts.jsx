/* REACT MASONRY */
import Masonry from 'react-masonry-css';
/* COMPONENTS */
import Post from './Post';

const Posts = ({ posts }) => {
  const breakpointColumnsObj = {
    default: 3,
    1000: 2,
    700: 1,
  };
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className='my-masonry-grid max-w-3xl mx-auto lg:max-w-full'
      columnClassName='my-masonry-grid_column'
    >
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </Masonry>
  );
};
export default Posts;
