import classes from "./Header.module.css";
import Navigation from "./Navigation";
import NavMenu from "./NavMenu";

const Header = (props) => {
  return (
    <div className={classes.header}>
      <div className={classes.title}>
        <h1>Simple Task</h1>
      </div>
      <Navigation />
      <NavMenu></NavMenu>
    </div>
  );
};

export default Header;
