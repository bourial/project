import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { UserContext } from '../context/user-context';
import { useContext } from 'react';

export const AlreadyAuthenticated: React.FC = () => {
  const Location = useLocation();
  const { isAuthenticated } = useContext(UserContext);

  return isAuthenticated ? (
    <Navigate to='/' state={{ from: Location }} replace />
  ) : (
    <Outlet />
  );
};
