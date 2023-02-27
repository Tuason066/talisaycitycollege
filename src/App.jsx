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
/* DATA */
import { posts } from './data';
/* COMPONENTS */
import Contacts from './pages/Contacts';
import Developers from './pages/Developers';
import Home from './pages/Home';
import Login from './pages/Login';
import LatestNewsAndUpdates from './pages/LatestNewsAndUpdates';
import About from './pages/About';
import Courses from './pages/Courses';
import SinglePost from './pages/SinglePost';
import NavbarFooterLayout from './layout/NavbarFooterLayout';
import FooterLayout from './layout/FooterLayout';
import OrganizationChart from './pages/OrganizationChart';
import ErrorMessage from './components/ErrorMessage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
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
          path='login'
          element={<Login />}
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
      </Route>
      <Route path='post/:id' element={<FooterLayout />}>
        <Route
          index
          element={<SinglePost posts={posts} />}
          errorElement={<ErrorMessage />}
        />
      </Route>
      <Route path='*' element={<ErrorMessage />} />
    </>
  )
);

export function App() {
  return <RouterProvider router={router} />;
}

export default App;
