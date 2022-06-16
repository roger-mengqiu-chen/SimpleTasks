import Button from "../UI/Button/Button";
import styles from "./TaskForm.module.css";
import Card from "../UI/Card/Card";
import { useState } from "react";

const TaskForm = (props) => {
  const [task, setTask] = useState("");
  const [user, setUser] = useState("");
  const [priority, setPriority] = useState("");
  const [isTaskValid, setTaskIsValid] = useState(true);
  const [isUserValid, setUserIsValid] = useState(true);
  const submitHandler = (event) => {
    event.preventDefault();
    let formValid = true;
    if (user.trim().length === 0) {
      setUserIsValid(false);
      formValid = false;
    }
    if (task.trim().length === 0) {
      setTaskIsValid(false);
      formValid = false;
    }

    if(formValid) {
      props.onAddTask(task, user, priority);
    }
    else {
      return;
    }
    
    setTask("");
    setUser("");
    setPriority("");
  };

  const inputHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setTaskIsValid(true);
    }
    setTask(event.target.value);
  };

  const userInputHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setUserIsValid(true);
      setUser(event.target.value);
    }
  }

  const priorityHandler = (event) => {
    setPriority(event.target.value);
  }

  return (
    <Card>
      <form className={styles["task-form"]} onSubmit={submitHandler}>
      <label className={styles["task-label"]} htmlFor="userInput">
        User
      </label>
      <input
        className={`${styles["task-input"]} ${!isUserValid && styles.invalid}`}
        id="userInput"
        onChange={userInputHandler}
        value={user}
      ></input>
      <label className={styles["task-label"]} htmlFor="taskInput">
        New Task
      </label>
      <input
        className={`${styles["task-input"]} ${!isTaskValid && styles.invalid}`}
        value={task}
        id="taskInput"
        onChange={inputHandler}
      ></input>
      <label className={styles["task-label"]} htmlFor="priority">
        Priority
      </label>
      <select id="priority" onChange={priorityHandler} className={styles["priority-selector"]} value={priority}>
        <option></option>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      <Button type="submit">Add Task</Button>
    </form>
    </Card>
    
  );
};

export default TaskForm;
