import classes from "./LoginForm.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import { useEffect, useState } from "react";

const LoginForm = (props) => {
  const [enteredEmail, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    setFormIsValid(
      enteredEmail.includes("@") && enteredPassword.trim().length > 6
    );
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const emailValidationHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const passwordValidationHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">E-mail </label>
          <input type="email" id="email" onChange={emailChangeHandler} onBlur={emailValidationHandler}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password </label>
          <input type="password" id="password" onChange={passwordChangeHandler} onBlur={passwordValidationHandler}/>
        </div>
        <div className={classes.action}>
          <Button type="submit" disabled={!formIsValid}>Login</Button>
        </div>
      </form>
    </Card>
  );
};

export default LoginForm;
