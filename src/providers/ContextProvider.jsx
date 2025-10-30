import { createContext, useContext, useState } from "react";
import { PropTypes } from "prop-types";

const StateContext = createContext({
  user: null,
  token: null,
  notification: null,
  setUser: () => {},
  setToken: () => {},
  setNotification: () => {},
});

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));

  const setToken = (token) => {
    _setToken(token);

    if (token) {
      localStorage.setItem("ACCESS_TOKEN", token);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
    }
  };

  return (
    <StateContext.Provider
      value={{
        user,
        token,
        setToken,
        setUser,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.any,
};

export const useStateContext = () => useContext(StateContext);
