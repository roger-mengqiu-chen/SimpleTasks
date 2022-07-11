import classes from "./NavMenu.module.css";
import CloseIcon from "../../../Icons/CloseIcon";
import AuthContext from "../../../context/auth-context";
import { useContext } from "react";

const NavMenu = (props) => {
  const ctx = useContext(AuthContext);

  return (
    <div
      className={`${classes.nav_menu} ${props.isShown === true ? classes.show : ""}`}
      onClose={props.onClose}
    >
      <div className={classes.close_icon} onClick={props.onClose}>
        <CloseIcon></CloseIcon>
      </div>
      <div className={classes.menu_content}>
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
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;
