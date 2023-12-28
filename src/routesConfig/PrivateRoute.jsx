import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from 'store/auth/selectors';

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const location = useLocation();
  console.log(location);
  if (isLoggedIn) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login"></Navigate>;
};
 