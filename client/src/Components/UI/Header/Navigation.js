import AuthContext from "../../../context/auth-context";
import classes from "./Navigation.module.css";
import { useContext } from "react";
import HamburgerMenuIcon from "../../../Icons/HamburgerMenuIcon";
import NavMenu from "./NavMenu";
import { useState } from "react";

const Navigation = (props) => {
  const ctx = useContext(AuthContext);
  const [menuIsShown, setMenuIsShown] = useState(false)

  const closeMenuHandler = () => {
    setMenuIsShown(false)
  }

  const openMenuHandler = () => {
    setMenuIsShown(true)
  }

  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li className={classes.desk}>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li className={classes.desk}>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li className={classes.desk}>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li className={classes.menu_icon} onClick={openMenuHandler}>
            <HamburgerMenuIcon className={classes.menu_icon}></HamburgerMenuIcon>
          </li>
        )}
      </ul>
      <NavMenu isShown={menuIsShown} onClose={closeMenuHandler}></NavMenu>
    </nav>
    
  );
};

export default Navigation;
