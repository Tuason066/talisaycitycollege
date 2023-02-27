/* REACT */
import { useState } from 'react';
/* REACT ROUTER */
import { Link } from 'react-router-dom';
/* REACT MARKDWON */
import ReactMarkdown from 'react-markdown';

const PostDescription = ({ id, subject, createdAt, title, description }) => {
  /* LIMIT POST DESCRIPTION */
  const [limitDescription, setLimitDescription] = useState(150);
  const handleLimitDescription = () =>
    setLimitDescription((prev) => (prev !== 150 ? 150 : 'preview'));

  return (
    <div className='p-5'>
      <div className='mb-3 inline-flex items-center gap-x-2'>
        <span className='p-base px-lg rounded tracking-wide text-customBlue-500 bg-yellow-400 text-sm uppercase font-semibold'>
          {subject}
        </span>
        <span className='text-sm'>{createdAt}</span>
      </div>
      <h5 className='mb-2 text-2xl font-bold tracking-wider'>
        {title.length >= 30 && limitDescription === 150
          ? `${title.slice(0, 30)}...`
          : title}
      </h5>
      {/* description */}
      <div className='mb-3 font-normal tracking-wide'>
        <ReactMarkdown>
          {description.length >= limitDescription
            ? `${description.slice(0, limitDescription)}...`
            : description}
        </ReactMarkdown>
        {description.length > limitDescription && (
          <button
            type='button'
            onClick={handleLimitDescription}
            className='hover:underline transition-all font-semibold'
          >
            {limitDescription === 150 ? 'See more' : 'See less'}
          </button>
        )}
      </div>
      {/* button for preview */}
      <Link
        to={`/post/${id}`}
        className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none'
      >
        Read more
        <svg
          aria-hidden='true'
          className='w-4 h-4 ml-2 -mr-1'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
            clipRule='evenodd'
          ></path>
        </svg>
      </Link>
    </div>
  );
};
export default PostDescription;
