import React from 'react';
import HomeConcern from '../HomeComponents/HomeConcern';
import HomeCourses from '../HomeComponents/HomeCourses';
import HomeFaq from '../HomeComponents/HomeFaq';
import HomeLandingpage from '../HomeComponents/HomeLandingpage';
import HomeNewsAndUpdates from '../HomeComponents/HomeNewsAndUpdates';

function Home() {
  return (
    <>
      <HomeLandingpage />
      <HomeCourses />
      <HomeNewsAndUpdates />
      <HomeFaq />
      <HomeConcern />
    </>
  );
}

export default Home;
