import Header from "./Components/UI/Header/Header";
import TaskApp from "./Components/TaskApp/TaskApp";
import Banner from "./Components/UI/Banner/Banner";

import { useEffect, useState } from "react";
import "./App.css";
import LoginForm from "./Components/Login/LoginForm";
import AuthContext from "./context/auth-context";

function App() {
  const [isLogin, setLoginStatus] = useState(false);

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
    <AuthContext.Provider value={{ isLoggedIn: isLogin }}>
      <Banner>
        <b>This app is for demo purpose only. Currently there's no authentication procedure involved. Please don't input sensitive data.</b> <br />
        Click this banner to dismiss.
      </Banner>
      <Header onLogout={logoutHandler} />
      <main>
        {!isLogin && <LoginForm onLogin={loginHandler} />}
        {isLogin && <TaskApp onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
