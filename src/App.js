import "./App.css";
import Ingredients from "./components/Ingredients";
import { AuthContext } from "./context/auth-context";
import React, { useContext } from "react";
import Auth from "./UI/Auth";
function App() {
  const authContext = useContext(AuthContext);

  let content = <Auth />;
  if (authContext.isAuth) {
    content = <Ingredients />;
  }

  return content;
}

export default App;
