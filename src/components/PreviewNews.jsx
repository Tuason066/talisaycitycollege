/* context */
import { useGlobalContext } from '../context';
/* react */
import { useState } from 'react';
/* icons */
import { Icon } from '@iconify/react';
import ConvertText from './ConvertText';

const PreviewNews = () => {
  const { isPreview, setIsPreview } = useGlobalContext();
  const { defaultNews, news } = isPreview;

  const [currentCount, setCurrentCount] = useState(0);

  const handleClosePreview = () => {
    setIsPreview((prev) => {
      return { ...prev, state: false, news: [], defaultNews: {} };
    });
  };

  const handlePreviousButton = () =>
    setCurrentCount((prev) => (prev === 0 ? news.length - 1 : prev - 1));

  const handleNextButton = () =>
    setCurrentCount((prev) => (prev === news.length - 1 ? 0 : prev + 1));

  // document.body.style.

  return (
    <aside className='fixed top-0 left-0 min-h-screen max-h-screen min-w-full bg-white overflow-y-scroll lg:overflow-hidden'>
      <button
        type='button'
        onClick={handleClosePreview}
        className='absolute top-2 left-2 md:top-3 md:left-3 lg:top-4 lg:left-4 z-10 bg-[rgba(0,0,0,.1)] p-2 rounded-full transition-all'
      >
        <Icon
          icon='humbleicons:times'
          className='text-xl md:text-2xl'
          color='white'
        />
      </button>

      {/* ####### TEMP CONVERT ########## */}
      {/* <ConvertText /> */}
      {/* ####### END OF TEMP CONVERT ########## */}

      <section className='lg:grid lg:grid-cols-[1fr,minmax(0,500px)]'>
        {/* image */}
        <div className='grid grid-cols-1 grid-rows-1 place-items-center relative overflow-hidden md:min-h-screen md:max-h-screen bg-black'>
          {news.map(({ img, title }, index) => {
            let position = 'translate-x-[100vw]';

            if (
              (currentCount === 0 && news.length - 1 === index) ||
              currentCount - 1 === index
            ) {
              position = '-translate-x-[100vw]';
            }

            if (index === currentCount) {
              position = 'translate-x-0';
            }

            return (
              <img
                key={index}
                src={img}
                alt={title ?? defaultNews.title}
                className={`${position} w-full max-w-fit max-h-screen col-start-1 col-end-2 row-start-1 row-end-2 transition-all`}
              />
            );
          })}
          {/* buttons for next/previous */}
          {news.length > 1 && (
            <>
              {/* previous */}
              <button
                type='button'
                className='absolute top-1/2 left-[3%] -translate-y-1/2 p-1 md:p-2 bg-[rgba(0,0,0,.1)] hover:bg-[rgba(0,0,0,.15)] rounded-full transition-all hover:scale-110'
                onClick={handlePreviousButton}
              >
                <Icon
                  icon='material-symbols:chevron-left-rounded'
                  width='40'
                  color='white'
                />
              </button>
              {/* next */}
              <button
                type='button'
                className='absolute top-1/2 right-[3%] -translate-y-1/2 p-1 md:p-2 bg-[rgba(0,0,0,.1)] hover:bg-[rgba(0,0,0,.15)] rounded-full transition-all hover:scale-110'
                onClick={handleNextButton}
              >
                <Icon
                  icon='material-symbols:chevron-right-rounded'
                  width='40'
                  color='white'
                />
              </button>
            </>
          )}
        </div>
        {/* info */}
        <article className='py-6 md:py-8 lg:max-h-screen lg:overflow-y-scroll'>
          <div className='w-11/12 mx-auto'>
            {news.map(({ title, info }, index) => {
              if (index !== currentCount) return;
              return (
                <div key={index}>
                  <h2 className='mb-3 font-bold text-lg md:text-xl'>
                    {title ?? defaultNews.title}
                  </h2>
                  {info
                    ? info.map((text, index) => {
                        return (
                          <ConvertText
                            key={index}
                            textClassName={'mb-3 font-normal text-gray-700'}
                            value={text}
                          />
                        );
                      })
                    : defaultNews.details.map((text, index) => {
                        return (
                          <ConvertText
                            key={index}
                            textClassName={'mb-3 font-normal text-gray-700'}
                            value={text}
                          />
                        );
                      })}
                </div>
              );
            })}
          </div>
        </article>
      </section>
    </aside>
  );
};
export default PreviewNews;
