import { lazy } from 'react';
const About = lazy(() => import('./About'));
const Contacts = lazy(() => import('./Contacts'));
const Courses = lazy(() => import('./Courses'));
const Developers = lazy(() => import('./Developers'));
const FacultyLogin = lazy(() => import('./FacultyLogin'));
const FacultyPortal = lazy(() => import('./FacultyPortal'));
const StudentLogin = lazy(() => import('./StudentLogin'));
const StudentPortal = lazy(() => import('./StudentPortal'));
const Home = lazy(() => import('./Home'));
const LatestNewsAndUpdates = lazy(() => import('./LatestNewsAndUpdates'));
const OrganizationChart = lazy(() => import('./OrganizationChart'));
const SinglePost = lazy(() => import('./SinglePost'));

export {
  About,
  Contacts,
  Courses,
  Developers,
  FacultyLogin,
  FacultyPortal,
  StudentLogin,
  StudentPortal,
  Home,
  LatestNewsAndUpdates,
  OrganizationChart,
  SinglePost,
};
