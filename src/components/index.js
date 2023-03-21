import { lazy } from 'react';
const Achievers = lazy(() => import('./Achievers'));
const ErrorMessage = lazy(() => import('./ErrorMessage'));
const CoursesFilter = lazy(() => import('./CoursesFilter'));
const Course = lazy(() => import('./Course'));
const CoreValues = lazy(() => import('./CoreValues'));
const Concern = lazy(() => import('./Concern'));
const AsideSubmenu = lazy(() => import('./AsideSubmenu'));
const AsideMenu = lazy(() => import('./AsideMenu'));
const Navbar = lazy(() => import('./Navbar'));
const Mission = lazy(() => import('./Mission'));
const Logo = lazy(() => import('./Logo'));
const LandingPage = lazy(() => import('./LandingPage'));
const History = lazy(() => import('./History'));
const Goals = lazy(() => import('./Goals'));
const FrequentlyAskedQuestions = lazy(() =>
  import('./FrequentlyAskedQuestions')
);
const Footer = lazy(() => import('./Footer'));
const Vision = lazy(() => import('./Vision'));
const Submenu = lazy(() => import('./Submenu'));
const SinglePostMedia = lazy(() => import('./SinglePostMedia'));
const SinglePostDescription = lazy(() => import('./SinglePostDescription'));
const ScrollToTop = lazy(() => import('./ScrollToTop'));
const Posts = lazy(() => import('./Posts'));
const Post = lazy(() => import('./Post'));
const PostMedia = lazy(() => import('./PostMedia'));
const PostDescription = lazy(() => import('./PostDescription'));
const PortalsDropdown = lazy(() => import('./PortalsDropdown'));
const PageLinks = lazy(() => import('./PageLinks'));
const PageLink = lazy(() => import('./PageLink'));

export {
  Vision,
  Submenu,
  SinglePostMedia,
  SinglePostDescription,
  ScrollToTop,
  Posts,
  PostMedia,
  PostDescription,
  Post,
  PortalsDropdown,
  PageLinks,
  PageLink,
  Navbar,
  Mission,
  Logo,
  LandingPage,
  History,
  Goals,
  FrequentlyAskedQuestions,
  Footer,
  ErrorMessage,
  CoursesFilter,
  Course,
  CoreValues,
  Concern,
  AsideSubmenu,
  AsideMenu,
  Achievers,
};
