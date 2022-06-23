import Header from "./Components/UI/Header/Header";
import TaskApp from "./Components/TaskApp/TaskApp";

import { useState } from "react";
import "./App.css";
import LoginForm from "./Components/Login/LoginForm";

function App() {

  const [isLogin, setLoginStaus] = useState(false);

  return (
    <div>
      <Header />
      <LoginForm />
      <TaskApp />
    </div>
  );
}

export default App;
