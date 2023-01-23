/* react */
import { useState } from 'react';
/* context */
import { useGlobalContext } from '../context';
/* react masonry : https://www.npmjs.com/package/react-masonry-css */
import Masonry from 'react-masonry-css';
/* data */
// import { newsAndUpdates } from '../data';
/* component */
import News from './News';

const NewsAndUpdates = ({ children, data, titleClass, subTitleClass }) => {
  const breakpointColumnsObj = {
    default: 3,
    1000: 2,
    700: 1,
  };

  return (
    <section className='py-8 md:py-12 lg:py-14'>
      <div className='mx-auto w-11/12'>
        <h2 className={titleClass}>Latest news and updates</h2>
        <p className={subTitleClass}>Stay up to date</p>
        {/* cards */}
        {/* ui source: https://flowbite.com/docs/components/card/ */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className='my-masonry-grid max-w-3xl mx-auto lg:max-w-full'
          columnClassName='my-masonry-grid_column'
        >
          {/* {newsAndUpdates.map((item, index) => { */}
          {data.map((item, index) => {
            return <News data={item} key={index} />;
          })}
        </Masonry>
        {children}
      </div>
    </section>
  );
};
export default NewsAndUpdates;
