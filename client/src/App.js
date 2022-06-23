import Header from "./Components/UI/Header/Header";
import TaskApp from "./Components/TaskApp/TaskApp";

import { useEffect, useState } from "react";
import "./App.css";
import LoginForm from "./Components/Login/LoginForm";

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
    <>
      <Header isAuthenticated={isLogin} onLogout={logoutHandler} />
      <main>
        {!isLogin && <LoginForm onLogin={loginHandler}/>}
        {isLogin && <TaskApp onLogout={logoutHandler}/>}
      </main>
    </>
  );
}

export default App;
