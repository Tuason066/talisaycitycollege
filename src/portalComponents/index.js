import { lazy } from 'react';
const PortalNavigation = lazy(() => import('./PortalNavigation'));
const MobileScheduleTable = lazy(() => import('./MobileScheduleTable'));
const DesktopScheduleTable = lazy(() => import('./DesktopScheduleTable'));
const MobileMessages = lazy(() => import('./MobileMessages'));

export {
  PortalNavigation,
  MobileScheduleTable,
  DesktopScheduleTable,
  MobileMessages,
};
