import React, { useState } from "react";

export const AuthContext = React.createContext({
  isAuth: false,
  login: () => {},
});

const AuthContextProvider = (props) => {
  const [login, setLogin] = useState(false);
  const loginHandler = () => {
    setLogin(true);
  };
  return (
    <AuthContext.Provider value={{ login: loginHandler, isAuth: login }}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
