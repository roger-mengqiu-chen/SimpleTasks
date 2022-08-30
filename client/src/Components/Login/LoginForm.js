import classes from "./LoginForm.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import React, {
  useEffect,
  useState,
  useReducer,
  useContext,
  useRef,
} from "react";
import AuthContext from "../../context/auth-context";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const LoginForm = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [error, setError] = useState(null);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const authCtx = useContext(AuthContext);

  const emailRef = useRef();
  const passwordRef = useRef();

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("check");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 1000);

    return () => {
      console.log("Clean up");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const emailValidationHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const passwordValidationHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailRef.current.focus();
      setError("Email should have @")
    } else {
      passwordRef.current.focus();
      setError("Password should have at least 7 characters")
    }
  };

  return (
    <Card className={classes.login}>
      {error && <div className={classes.error}>{error}</div>}
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          label="E-Mail"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={emailValidationHandler}
          ref={emailRef}
        ></Input>

        <Input
          id="password"
          label="Password"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={passwordValidationHandler}
          ref={passwordRef}
        ></Input>
        <div className={classes.action}>
          <Button type="submit" >
            Login
          </Button>
          <a href="/" className={classes.register}>Register an account</a>
        </div>
      </form>
    </Card>
  );
};

export default LoginForm;
