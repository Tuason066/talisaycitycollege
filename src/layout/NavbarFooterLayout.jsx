/* REACT ROUTER */
import { Outlet } from 'react-router-dom';

/* COMPONENTS */
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const NavbarFooterLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </>
  );
};
export default NavbarFooterLayout;
