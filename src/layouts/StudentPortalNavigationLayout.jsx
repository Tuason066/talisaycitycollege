/* REACT ROUTER */
import { Outlet } from 'react-router-dom';
/* COMPONENTS */
import PortalNavigation from '../portalComponents/PortanNavigation';

const StudentPortalNavigationLayout = () => {
  return (
    <>
      <PortalNavigation />
      <Outlet />
    </>
  );
};
export default StudentPortalNavigationLayout;
