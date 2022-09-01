import useInput from "../../hooks/use-input";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./AuthForm.module.css";

const isEmail = (value) => value.includes("@");
const passwordValidator = (value) => value.length >= 6;

const AuthForm = (props) => {
  const {
    value: email,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: password,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(passwordValidator);

  const isLoginForm = props.formType === "login";

  const submitHandler = (event) => {
    event.preventDefault();
    if (emailHasError || passwordHasError) {
      return;
    }



    resetEmail();
    resetPassword();
  };

  let error = "";
  if (emailHasError) {
    error = "Email format is invalid";
  } 
  if (passwordHasError) {
    error = "Password should have at least 6 characters";
  } 
  if (passwordHasError && emailHasError) {
    error = "Email and Password are invalid";
  }

  return (
    <Card className={classes.authform}>
      {error && <div className={classes.error}>{error}</div>}
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailHasError ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          ></input>
        </div>
        <div
          className={`${classes.control} ${
            passwordHasError ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          ></input>
        </div>
        <div className={classes.action}>
          <Button type="submit">{isLoginForm ? "Login" : "Register"}</Button>
          {isLoginForm && (
            <a className={classes.alt} href="/register">
              I Don't have an account
            </a>
          )}
          {!isLoginForm && (
            <a className={classes.alt} href="/login">
              I have an account
            </a>
          )}
        </div>
      </form>
    </Card>
  );
};

export default AuthForm;
