import NewsMedia from './NewsMedia';

/* icons */
import { Icon } from '@iconify/react';

const MediaCarousel = ({
  media,
  currentCount,
  setCurrentCount,
  defaultValue,
}) => {
  const handlePreviousButton = () =>
    setCurrentCount((prev) => (prev === 0 ? media.length - 1 : prev - 1));

  const handleNextButton = () =>
    setCurrentCount((prev) => (prev === media.length - 1 ? 0 : prev + 1));

  return (
    <div className='grid grid-cols-1 grid-rows-1 place-items-center relative overflow-hidden md:min-h-screen md:max-h-screen bg-black shadow'>
      {media.map((item, index) => {
        const mediaWidth = () => {
          const { image, video } = item;
          if (image) return 'max-w-fit';
          if (video) return 'max-w-full';
        };

        let position = 'translate-x-[100vw]';

        if (
          (currentCount === 0 && media.length - 1 === index) ||
          currentCount - 1 === index
        ) {
          position = '-translate-x-[100vw]';
        }

        if (index === currentCount) {
          position = 'translate-x-0';
        }
        return (
          <NewsMedia
            key={index}
            {...item}
            defaultTitle={defaultValue.title}
            /*  mediaStyle={`${position} ${mediaWidth()} w-full max-h-screen col-start-1 col-end-2 row-start-1 row-end-2 transition-all z-10`} */
            mediaStyle={`${position} ${mediaWidth()} block w-full max-h-screen col-start-1 col-end-2 row-start-1 row-end-2 transition-all z-10`}
          />
        );
      })}
      {/* buttons for next/previous */}
      {media.length > 1 && (
        <>
          {/* previous */}
          <button
            type='button'
            className='absolute top-1/2 left-[3%] -translate-y-1/2 p-1 md:p-2 bg-[rgba(0,0,0,.1)] hover:bg-[rgba(0,0,0,.15)] rounded-full transition-all hover:scale-110 z-10'
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
            className='absolute top-1/2 right-[3%] -translate-y-1/2 p-1 md:p-2 bg-[rgba(0,0,0,.1)] hover:bg-[rgba(0,0,0,.15)] rounded-full transition-all hover:scale-110 z-10'
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
  );
};
export default MediaCarousel;
