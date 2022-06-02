import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <NavLink to='ingredient'>
        <button type='button'>재료</button>
      </NavLink>
      <Outlet />
    </div>
  );
};

export default Layout;
