import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { UserContext } from '../context/user-context';
import { useContext } from 'react';

export const RequireAuth: React.FC = () => {
  const Location = useLocation();
  const { isAuthenticated } = useContext(UserContext);

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ from: Location }} replace />
  );
};
