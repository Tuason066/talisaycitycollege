/* REACT MARKDOWN */
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const SinglePostDescription = ({ media, currentCount, title, description }) => {
  console.log('media title: ', media[currentCount].title);
  console.log('title: ', title);

  return (
    <article className='singlePage-description lg:max-h-screen lg:overflow-y-scroll bg-customBlueViolet-700 col-start-2 col-end-3 py-4 md:py-8 text-white z-50 md:px-4'>
      <div className='w-11/12 mx-auto'>
        <h2 className='font-bold text-lg md:text-xl'>
          {media[currentCount].title === undefined
            ? title
            : media[currentCount].title}
        </h2>
        <br />
        <ReactMarkdown>
          {media[currentCount].info === undefined
            ? description
            : media[currentCount].info}
        </ReactMarkdown>
      </div>
    </article>
  );
};
export default SinglePostDescription;
