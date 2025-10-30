import { Suspense } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useUser } from "../hooks/auth-hook";
import { useStateContext } from "../providers/ContextProvider";

const AdminLayout = ({ children }) => {
  const { token, setToken } = useStateContext();
  const { user, isLoading } = useUser();
  const location = useLocation();

  if (!isLoading && !user) {
    <Navigate to="/login" state={{ from: location }} replace />;
    setToken(null);
  }

  if (!token)
    return <Navigate to="/login" state={{ from: location }} replace />;

  if (isLoading) return <Spinner />;

  return (
    <div>
      <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72 bg-gray-50 min-h-screen">
        <Suspense fallback={<Spinner />}>{children}</Suspense>
      </div>
    </div>
  );
};

export default AdminLayout;
