import { Navigate, Route, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
  isBooked: boolean;
  children?: React.ReactNode;
}

const ProtectedRoute : React.FC<ProtectedRouteProps> = ({ isBooked, children }) => {

  return isBooked ? (
    <>{children}</>
  ) : (
    <Navigate to="/" />
  )
}

export default ProtectedRoute;






