/* react masonry : https://www.npmjs.com/package/react-masonry-css */
import Masonry from 'react-masonry-css';
/* component */
import News from './News';
import Section from './Section';

const NewsAndUpdates = ({ children, data, titleClass, subTitleClass }) => {
  const breakpointColumnsObj = {
    default: 3,
    1000: 2,
    700: 1,
  };

  return (
    <Section>
      <h2 className={titleClass}>Latest news and updates</h2>
      <p className={subTitleClass}>Stay up to date</p>
      {/* cards */}
      {/* ui source: https://flowbite.com/docs/components/card/ */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='my-masonry-grid max-w-3xl mx-auto lg:max-w-full'
        columnClassName='my-masonry-grid_column'
      >
        {data.map((item, index) => {
          return <News data={item} key={index} />;
        })}
      </Masonry>
      {children}
    </Section>
  );
};
export default NewsAndUpdates;
