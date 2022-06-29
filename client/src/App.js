import Header from "./Components/UI/Header/Header";
import TaskApp from "./Components/TaskApp/TaskApp";
import Banner from "./Components/UI/Banner/Banner";

import { useContext } from "react";
import "./App.css";
import LoginForm from "./Components/Login/LoginForm";
import AuthContext from "./context/auth-context";

function App() {
  const ctx = useContext(AuthContext);

  const dismissBanner = (e) => {
    document.getElementById("bannerWarning").remove();
  }

  return (
    <>
      <Banner onClick={dismissBanner} id="bannerWarning">
        <b>
          This app is for demo purpose only. Currently there's no authentication
          procedure involved. Please don't input sensitive data.
        </b>
        <br />
        Click this banner to dismiss.
      </Banner>
      <Header />
      <main>
        {!ctx.isLoggedIn && <LoginForm />}
        {ctx.isLoggedIn && <TaskApp />}
      </main>
    </>
  );
}

export default App;
