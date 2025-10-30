import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axiosClient from "../api/axiosClient";
import { useStateContext } from "../providers/ContextProvider";

const apiUserUrl = "user";

export const useLogin = () => {
  const { setToken, setUser } = useStateContext();
  const navigate = useNavigate();

  const { mutate: loginMutation, isPending: isLoggingIn } = useMutation({
    mutationFn: (credentials) => {
      return axiosClient
        .post("login", credentials)
        .then(({ data }) => {
          // console.log(data);
          return data;
        })
        .catch((err) => {
          throw new Error(err.message);
        });
    },

    onSuccess: (user) => {
      setUser(user.user);
      setToken(user.token);

      toast.success("Successfully Logged In!");

      navigate("/event", { replace: true });
    },
    // onError: (error) => {
    onError: () => {
      // console.log(error.message);
      toast.error("Invalid Credientials");
    },
  });

  return { loginMutation, isLoggingIn };
};

export const useLogout = () => {
  const { setToken, setUser } = useStateContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logoutMutation, isPending: isLoggingOut } = useMutation({
    mutationFn: async () => {
      return axiosClient
        .post("logout")
        .then(() => {})
        .catch((err) => {
          throw new Error(err.message);
        });
    },

    onSuccess: () => {
      setUser({});
      setToken(null);

      queryClient.removeQueries();
      navigate("/", { replace: true });
    },
  });

  return { logoutMutation, isLoggingOut };
};

export const useUser = () => {
  const { data: user, isLoading } = useQuery({
    queryKey: [apiUserUrl],
    queryFn: async () => {
      return axiosClient
        .get(apiUserUrl)
        .then(({ data }) => {
          // console.log(data);
          return data;
        })
        .catch((err) => {
          throw new Error(err.message);
        });
    },
  });

  return { user, isLoading };
};
