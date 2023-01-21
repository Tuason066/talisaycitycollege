/* context */
import { useGlobalContext } from '../context';
/* react */
import { useState } from 'react';
/* icons */
import { Icon } from '@iconify/react';
/* components */
import ConvertText from './ConvertText';
import MediaCarousel from './MediaCarousel';

const PreviewNews = () => {
  const { isPreview, setIsPreview } = useGlobalContext();
  const { defaultNews, news } = isPreview;
  const [currentCount, setCurrentCount] = useState(0);

  const handleClosePreview = () => {
    setIsPreview((prev) => {
      return { ...prev, state: false, news: [], defaultNews: {} };
    });
    /* show the scrollbar */
    document.body.style.overflow = 'visible';
  };

  return (
    <aside className='fixed top-0 left-0 min-h-screen max-h-screen min-w-full bg-white overflow-y-scroll lg:overflow-hidden'>
      <button
        type='button'
        onClick={handleClosePreview}
        className='absolute top-2 left-2 md:top-3 md:left-3 lg:top-4 lg:left-4 bg-[rgba(0,0,0,.1)] p-2 rounded-full transition-all z-20'
      >
        <Icon
          icon='humbleicons:times'
          className='text-xl md:text-2xl'
          color='white'
        />
      </button>

      <section className='lg:grid lg:grid-cols-[1fr,minmax(0,400px)]'>
        {/* media - images/videos */}
        <MediaCarousel
          media={news}
          defaultValue={defaultNews}
          currentCount={currentCount}
          setCurrentCount={setCurrentCount}
        />
        {/* TODO: Make a NewsPreviewArticle component */}
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
