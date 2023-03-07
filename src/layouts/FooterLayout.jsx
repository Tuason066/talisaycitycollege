/* REACT ROUTER */
import { Outlet } from 'react-router-dom';

/* COMPONENTS */
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const FooterLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
      <ScrollToTop />
    </>
  );
};
export default FooterLayout;
