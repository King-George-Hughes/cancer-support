import Spinner from "../components/Spinner";
import { useUser } from "../hooks/auth-hook";
import { useStateContext } from "../providers/ContextProvider";

const AuthComponent = ({ children }) => {
  const { token, setToken } = useStateContext();
  const { user, isLoading } = useUser();

  if (!isLoading && !user) {
    setToken(null);
    return;
  }

  if (!token) return;

  if (isLoading) return <Spinner />;

  return <>{children}</>;
};

export default AuthComponent;
