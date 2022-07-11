import classes from "./Header.module.css";
import Navigation from "./Navigation";
const Header = (props) => {
  return (
    <div className={classes.header}>
      <div className={classes.title}>
        <h1>Simple Task</h1>
      </div>
      <Navigation />
    </div>
  );
};

export default Header;
