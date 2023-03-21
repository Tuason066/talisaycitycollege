/* REACT ROUTER */
import { Outlet } from 'react-router-dom';
/* COMPONENTS */
// import PortalNavigation from '../portalComponents/PortanNavigation';
import { PortalNavigation } from '../portalComponents';

const StudentPortalNavigationLayout = () => {
  return (
    <>
      <PortalNavigation />
      <Outlet />
    </>
  );
};
export default StudentPortalNavigationLayout;
