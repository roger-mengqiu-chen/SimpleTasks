import{ Route, Routes, Navigate } from "react-router-dom"

import Banner from "./Components/UI/Banner/Banner";

import { useContext } from "react";
import "./App.css";

import Layout from "./Components/UI/Layout/Layout";
import AuthContext from "./context/auth-context";
import LoginScreen from "./page/LoginScreen";
import MainScreen from "./page/MainScreen";
import RegisterScreen from "./page/RegisterScreen";

function App() {
  const ctx = useContext(AuthContext);

  const dismissBanner = (e) => {
    document.getElementById("bannerWarning").remove();
  }

  return (
    <Layout>
      <Banner onClick={dismissBanner} id="bannerWarning">
        <b>
          This app is for demo purpose only. Currently there's no authentication
          procedure involved. Please don't input sensitive data.
        </b>
        <br />
        Click this banner to dismiss.
      </Banner>
      
      <Routes>
        <Route path="/" element={<MainScreen></MainScreen>}></Route>
        <Route path="/login" element={<LoginScreen></LoginScreen>}></Route>
        <Route path="/register" element={<RegisterScreen></RegisterScreen>}></Route>
        <Route path="/profile"></Route>
        <Route path="/404"></Route>
        <Route path="*" element={<Navigate to="/login" replace />} ></Route>
      </Routes>      
    </Layout>
  );
}

export default App;
