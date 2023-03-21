import { lazy } from 'react';
const PortalNavigation = lazy(() =>
  import('../portalComponents/PortalNavigation')
);
const MobileScheduleTable = lazy(() =>
  import('../portalComponents/MobileScheduleTable')
);
const DesktopScheduleTable = lazy(() =>
  import('../portalComponents/DesktopScheduleTable')
);

export { PortalNavigation, MobileScheduleTable, DesktopScheduleTable };
