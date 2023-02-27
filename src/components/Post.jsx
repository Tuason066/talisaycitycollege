/* REACT ROUTER */
import { Link } from 'react-router-dom';
/* COMPONENTS */
import PostMedia from './PostMedia';
import PostDescription from './PostDescription';

const Post = ({ post }) => {
  return (
    <article
      key={post.id}
      className='max-w-sm mx-auto bg-customBlueViolet-700 text-white border-2 border-customBlueViolet-700 text-whote rounded-lg shadow-lg relative'
      data-aos='fade-up'
      data-aos-anchor-placement='top-bottom'
      data-aos-duration='700'
      data-aos-delay='300'
    >
      {/* images/videos */}
      <Link to={`/post/${post.id}`} className='rounded-t-lg overflow-hidden'>
        <PostMedia
          image={post.media[0].image}
          video={post.media[0].video}
          title={post.title}
          mediaStyle='rounded-t-lg'
        />
      </Link>
      {/* post description */}
      <PostDescription {...post} />
    </article>
  );
};
export default Post;
