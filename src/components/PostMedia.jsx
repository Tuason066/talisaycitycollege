const PostMedia = ({ image, video, title, defaultTitle, mediaStyle }) => {
  if (image) {
    return (
      <img
        src={image}
        alt={title ?? defaultTitle}
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
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }
  return;
};
export default PostMedia