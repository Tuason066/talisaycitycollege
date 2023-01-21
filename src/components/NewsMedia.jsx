const NewsMedia = ({ image, video, title, defaultTitle, mediaStyle }) => {
  if (image) {
    return (
      <img
        src={image}
        alt={title ?? defaultTitle}
        loading='lazy'
        className={`${mediaStyle}`}
      />
    );
  }

  if (video) {
    return (
      <div className={mediaStyle}>
        <div className='h-0 pb-[52.25%] relative w-full'>
          <iframe
            className='absolute w-full h-full'
            src={video}
            title={title ?? defaultTitle}
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }
  return;
};
export default NewsMedia;
