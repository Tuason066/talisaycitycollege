import { lazy } from 'react';
const NavbarFooterLayout = lazy(() => import('./NavbarFooterLayout'));
const StudentPortalNavigationLayout = lazy(() =>
  import('./StudentPortalNavigationLayout')
);
const FooterLayout = lazy(() => import('./FooterLayout'));

export { NavbarFooterLayout, StudentPortalNavigationLayout, FooterLayout };
