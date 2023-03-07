/* REACT ROUTER */
import { NavLink } from 'react-router-dom';

const PortalNavigation = () => {
  /* active navlink style */
  let activeNavLinkStyle = {
    backgroundColor: '#ffcc00',
    color: '#004aac',
  };

  return (
    <nav className='py-4'>
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
              className='bg-customBlue-500 text-white hover:bg-customYellow-500 hover:text-customBlue-500 text-sm px-lg py-base rounded inline-block m-1 md:m-2 shadow-md transition-all duration-300'
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
              className='bg-customBlue-500 text-white hover:bg-customYellow-500 hover:text-customBlue-500 text-sm px-lg py-base rounded inline-block m-1 md:m-2 shadow-md transition-all duration-300'
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
              className='bg-customBlue-500 text-white hover:bg-customYellow-500 hover:text-customBlue-500 text-sm px-lg py-base rounded inline-block m-1 md:m-2 shadow-md transition-all duration-300'
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
              className='bg-customBlue-500 text-white hover:bg-customYellow-500 hover:text-customBlue-500 text-sm px-lg py-base rounded inline-block m-1 md:m-2 shadow-md transition-all duration-300'
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
              className='bg-customBlue-500 text-white hover:bg-customYellow-500 hover:text-customBlue-500 text-sm px-lg py-base rounded inline-block m-1 md:m-2 shadow-md transition-all duration-300'
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
