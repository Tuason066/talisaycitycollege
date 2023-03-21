import { lazy } from 'react';
const Calendar = lazy(() => import('./Calendar'));
const Grades = lazy(() => import('./Grades'));
const Messages = lazy(() => import('./Messages'));
const Password = lazy(() => import('./Password'));
const Schedule = lazy(() => import('./Schedule'));

export { Calendar, Grades, Messages, Password, Schedule };
