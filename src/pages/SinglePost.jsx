/* REACT */
import { useState, useEffect } from 'react';
/* REACT ROUTER */
import { useParams, useNavigate } from 'react-router-dom';
/* ICONS */
import { Icon } from '@iconify/react';
/* COMPONENTS */
import {
  Section,
  Posts,
  SinglePostMedia,
  SinglePostDescription,
} from '../components';

const SinglePost = ({ posts }) => {
  /* SINGLE POST ID */
  const { id } = useParams();

  /* INDEX LOOP FOR THE POST */
  const [currentCount, setCurrentCount] = useState(0);
  const newPosts = posts.slice(
    +id <= 1 ? 0 : +id - 2,
    +id >= posts.length ? posts.length : +id + 2
  );
  /* SINGLE POST DATA */
  const singlePost = newPosts.filter((post) => +post.id === +id)[0];
  /* OTHER POSTS */
  const featuredPosts = newPosts.filter((post) => +post.id !== +id);

  useEffect(() => {
    /* SCROLL ON LOAD */
    window.scrollTo(0, 0);
  });

  /* BACK TO LATEST NEWS AND UPDATES */
  const navigate = useNavigate();

  return (
    <>
      <section className='bg-white lg:overflow-hidden'>
        <button
          type='button'
          onClick={() => navigate('/posts')}
          className='absolute top-2 left-2 md:top-3 md:left-3 lg:top-4 lg:left-4 bg-[rgba(0,0,0,.1)] p-2 rounded-full transition-all z-20'
        >
          <Icon
            icon='line-md:remove'
            className='text-xl md:text-2xl'
            color='white'
          />
        </button>
        <div className='lg:min-h-screen lg:grid lg:grid-cols-[1fr,minmax(350px,500px)]'>
          {/* MEDIA */}
          <SinglePostMedia
            currentCount={currentCount}
            setCurrentCount={setCurrentCount}
            {...singlePost}
          />
          {/* DETAILS */}
          <SinglePostDescription currentCount={currentCount} {...singlePost} />
        </div>
      </section>
      {/* END OF SINGLE POST */}
      {/* OTHER NEWS AND UPDATES */}
      <Section>
        <header className=' mt-2 md:mt-4 mb-10 md:mb-14'>
          <h2 className='text-xl md:text-2xl lg:text-4xl font-black uppercase tracking-wide md:tracking-wider lg:tracking-widest'>
            Other latest news and updates
          </h2>
          <p className='text-xs lg:text-base'>Stay up to date</p>
        </header>
        <Posts posts={featuredPosts} />
      </Section>
    </>
  );
};
export default SinglePost;
