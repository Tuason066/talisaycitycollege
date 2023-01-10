import React from 'react';
import HomeConcern from '../HomeComponents/HomeConcern';
import HomeCourses from '../HomeComponents/HomeCourses';
import HomeFaq from '../HomeComponents/HomeFaq';
import HomeLandingpage from '../HomeComponents/HomeLandingpage';
import HomeNewsAndUpdates from '../HomeComponents/HomeNewsAndUpdates';

function Home() {
  return (
    <>
      <picture>
        {/* courses */}
        <source
          srcSet='https://scontent.fcgy2-2.fna.fbcdn.net/v/t1.6435-9/117332365_149168896804641_5169746677133164862_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHaWoI8ejn4Ag-WR1hzTB6MyecdxuXMGBzJ5x3G5cwYHNkrQYjoxV06UBBVWnoBbpApDorOLPkldqnnyJC0g762&_nc_ohc=-gYHfQsffBIAX_2ljCf&_nc_ht=scontent.fcgy2-2.fna&oh=00_AfCqcwlqXslAS7rcX0XljKb-QRn7tq1k5lGRoiwiV9w22w&oe=63CF9F1D'
          media='(min-width: 1024px)'
        />
        {/* explore your creativity */}
        <source
          srcSet='https://scontent.fcgy2-2.fna.fbcdn.net/v/t1.6435-9/117134533_149168893471308_9009678178520096320_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHtmrFeLnYODOLsERU0mxLZcemEvLlSQFRx6YS8uVJAVNWxXX6APJwune14GZTxKSwzfzLMwILk7Ec330-kXn3f&_nc_ohc=K6Ytx2lSK-IAX-eWRyd&tn=qrVFSxRDluMau_AA&_nc_ht=scontent.fcgy2-2.fna&oh=00_AfAbLSbRBmMuD9voLmaAr_yEQYZKZgb0DYcbZhoQXwWeEw&oe=63CF9E4D'
          media='(min-width: 768px)'
        />
        {/* pursue your passion */}
        <img
          src='https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/308513360_497351702400867_6391470987930283293_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeFQ4z0Gt2xQLkyrqnsmnaRLFiymBE8j5iwWLKYETyPmLJIEhWqmgVzZjSSIeFzz5IK1m16IvVvJBN_RJDrlGGmF&_nc_ohc=ywkWqoqIeXoAX9WITI2&_nc_ht=scontent.fceb2-2.fna&oh=00_AfDV-Z4YQGYCI9nX8WqI0nfdpIshoc1_PKUjByDw9tnCkQ&oe=63C13DE8'
          alt='pursue your passions'
        />
      </picture>
      <HomeLandingpage />
      <HomeCourses />
      <HomeNewsAndUpdates />
      <HomeFaq />
      <HomeConcern />
    </>
  );
}

export default Home;
