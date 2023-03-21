/* REACT ROUTER */
import { NavLink } from 'react-router-dom';

const PortalNavigation = () => {
  /* active navlink style */
  let activeNavLinkStyle = {
    backgroundColor: '#ffcc00',
    color: '#004aac',
  };

  return (
    <nav className='pt-4'>
      <div className='w-11/12 mx-auto tracking-wider'>
        <div className='text-center mb-6 mt-4'>
          <h2 className='font-bold text-xl uppercase'>Student Portal</h2>
          <p className='text-base'>Welcome, Jeffrey Tuason (2023-1387)</p>
        </div>
        <ul className='text-center'>
          <li className='inline-block'>
            <NavLink
              to={'schedule'}
              style={({ isActive }) =>
                isActive ? activeNavLinkStyle : undefined
              }
              className='blue-btn'
            >
              Schedule
            </NavLink>
          </li>
          <li className='inline-block'>
            <NavLink
              to={'calendar'}
              style={({ isActive }) =>
                isActive ? activeNavLinkStyle : undefined
              }
              className='blue-btn'
            >
              Calendar
            </NavLink>
          </li>
          <li className='inline-block'>
            <NavLink
              to={'grades'}
              style={({ isActive }) =>
                isActive ? activeNavLinkStyle : undefined
              }
              className='blue-btn'
            >
              Grades
            </NavLink>
          </li>
          <li className='inline-block'>
            <NavLink
              to={'messages'}
              style={({ isActive }) =>
                isActive ? activeNavLinkStyle : undefined
              }
              className='blue-btn'
            >
              Messages
            </NavLink>
          </li>
          <li className='inline-block'>
            <NavLink
              to={'password'}
              style={({ isActive }) =>
                isActive ? activeNavLinkStyle : undefined
              }
              className='blue-btn'
            >
              Password
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default PortalNavigation;
