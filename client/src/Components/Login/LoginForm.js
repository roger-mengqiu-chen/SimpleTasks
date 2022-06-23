import classes from "./LoginForm.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

const LoginForm = (props) => {
  return (
    <Card className={classes.login}>
      <form>
        <div className={classes.control}>
          <label htmlFor="email">E-mail </label>
          <input type="email" id="email"/>
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password </label>
          <input type="password" id="password" />
        </div>
        <div className={classes.action}>
          <Button type="submit">Login</Button>
        </div>
      </form>
    </Card>
  );
};

export default LoginForm;
