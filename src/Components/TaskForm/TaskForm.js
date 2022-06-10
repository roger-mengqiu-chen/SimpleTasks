import Button from "../Button/UI/Button";
import styles from "./TaskForm.module.css";
import { useState } from "react";

const TaskForm = (props) => {
  const [ctn, setCtn] = useState("");
  const [isValid, setIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    
    if (ctn.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddTask(ctn);
  };

  const inputHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setCtn(event.target.value);
  };

  return (
    <form className={styles["task-form"]} onSubmit={submitHandler}>
      <input
        className={`${styles["task-input"]} ${!isValid && styles.invalid}`}
        onChange={inputHandler}
      ></input>
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default TaskForm;
