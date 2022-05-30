import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

export default function PrivateRoute({ children }: any) {
  const { user } = useAppSelector((state) => state.account);
  const location = useLocation();

  return user ? (
    children
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
}
