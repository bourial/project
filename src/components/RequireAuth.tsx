import { Navigate, useLocation, Outlet } from "react-router-dom";

type RequireAuthProps = {
  allowedRoles: string[];
};
export const RequireAuth: React.FC = () => {
  const Location = useLocation();
  return localStorage.getItem("access") ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: Location }} replace />
  );
};
