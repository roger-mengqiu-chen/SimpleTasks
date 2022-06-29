import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => {
  const [isLoggedin, setLoginStatus] = useState(false);

  useEffect(() => {
    const storedUserLoginInfo = localStorage.getItem("isLoggedIn");

    if (storedUserLoginInfo === "1") {
      setLoginStatus(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setLoginStatus(false);
  };

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setLoginStatus(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedin,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
