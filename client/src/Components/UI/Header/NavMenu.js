import classes from "./NavMenu.module.css";
import HamburgerMenuIcon from "../../../Icons/HamburgerMenuIcon";

const NavMenu = (props) => {
  return (
    <div className={classes.nav_menu}>
      <HamburgerMenuIcon></HamburgerMenuIcon>
    </div>
  );
};

export default NavMenu;
