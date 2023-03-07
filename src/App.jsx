/* REACT ROUTER */
import {
  RouterProvider,
  createRoutesFromElements,
  Route,
  createBrowserRouter,
} from 'react-router-dom';
/* AOS ANIMATIONS */
import AOS from 'aos';
import 'aos/dist/aos.css';
// ..
AOS.init();
/* DATA */
import { posts } from './data';
/* COMPONENTS */
import { ErrorMessage } from './components';
/* PAGES */
import {
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
} from './pages';
/* PORTAL COMPONENTS */
import {
  Messages,
  Schedule,
  Calendar,
  Grades,
  Password,
} from './portalComponents';
/* LAYOUTS */
import {
  NavbarFooterLayout,
  FooterLayout,
  StudentPortalNavigationLayout,
} from './layouts';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* WRAPPED WITH NAVBAR AND FOOTER COMPONENT */}
      <Route
        path='/'
        element={<NavbarFooterLayout />}
        errorElement={<ErrorMessage />}
      >
        <Route index element={<Home />} errorElement={<ErrorMessage />} />
        <Route
          path='about'
          element={<About />}
          errorElement={<ErrorMessage />}
        />
        <Route
          path='courses'
          element={<Courses />}
          errorElement={<ErrorMessage />}
        />
        <Route
          path='contacts'
          element={<Contacts />}
          errorElement={<ErrorMessage />}
        />
        <Route
          path='developers'
          element={<Developers />}
          errorElement={<ErrorMessage />}
        />
        <Route
          path='posts'
          element={<LatestNewsAndUpdates posts={posts} />}
          errorElement={<ErrorMessage />}
        />
        <Route
          path='officials'
          element={<OrganizationChart />}
          errorElement={<ErrorMessage />}
        />
        <Route path='student-login' element={<StudentLogin />} />
        <Route path='faculty-login' element={<FacultyLogin />} />
        <Route
          path='student-portal'
          element={<StudentPortalNavigationLayout />}
        >
          <Route index element={<StudentPortal />} />
          <Route path='schedule' element={<Schedule />} />
          <Route path='calendar' element={<Calendar />} />
          <Route path='grades' element={<Grades />} />
          <Route path='messages' element={<Messages />} />
          <Route path='password' element={<Password />} />
        </Route>
        {/*  <Route path='student-portal' element={<StudentPortal />} />
        <Route path='faculty-portal' element={<FacultyPortal />} /> */}
      </Route>
      {/* END OF - WRAPPED WITH  NAVBAR AND FOOTER COMPONENT */}
      {/* ONLY HAS A FOOTER COMPONENT */}
      <Route path='post/:id' element={<FooterLayout />}>
        <Route
          index
          element={<SinglePost posts={posts} />}
          errorElement={<ErrorMessage />}
        />
      </Route>
      {/*END OF - ONLY HAS A FOOTER COMPONENT */}

      <Route path='*' element={<ErrorMessage />} />
    </>
  )
);

export function App() {
  return <RouterProvider router={router} />;
}

export default App;
