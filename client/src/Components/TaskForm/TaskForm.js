import Button from "../UI/Button/Button";
import styles from "./TaskForm.module.css";
import Card from "../UI/Card/Card";
import Modal from "../UI/Modal/Modal";
import { useState, useRef } from "react";

const TaskForm = (props) => {
  const nameInputRef = useRef();
  const taskInputRef = useRef();
  const priorityRef = useRef();

  const [error, setError] = useState();
  const [isTaskValid, setTaskIsValid] = useState(true);
  const [isUserValid, setUserIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const user = nameInputRef.current.value;
    const task = taskInputRef.current.value;
    const priority = priorityRef.current.value;

    let formValid = true;
    if (user.trim().length === 0) {
      setUserIsValid(false);
      formValid = false;
    }
    if (task.trim().length === 0) {
      setTaskIsValid(false);
      formValid = false;
    }

    let title = "";
    let message = "";

    if (!formValid) {
      title = "Invalid input";
      message = "Username or task should not be empty";
      setError({ title: title, message: message });
    }

    if (formValid) {
      setTaskIsValid(true);
      setUserIsValid(true);
      props.onAddTask(task, user, priority);
      taskInputRef.current.value = "";
      nameInputRef.current.value = "";
      priorityRef.current.value = "";
    } else {
      return;
    }
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></Modal>
      )}
      <Card>
        <form className={styles["task-form"]} onSubmit={submitHandler}>
          <label className={styles["task-label"]} htmlFor="userInput">
            User
          </label>
          <input
            className={`${styles["task-input"]} ${
              !isUserValid && styles.invalid
            }`}
            id="userInput"
            ref={nameInputRef}
          ></input>
          <label className={styles["task-label"]} htmlFor="taskInput">
            New Task
          </label>
          <input
            className={`${styles["task-input"]} ${
              !isTaskValid && styles.invalid
            }`}
            id="taskInput"
            ref={taskInputRef}
          ></input>
          <label className={styles["task-label"]} htmlFor="priority">
            Priority
          </label>
          <select
            id="priority"
            ref={priorityRef}
            className={styles["priority-selector"]}
          >
            <option></option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          <Button type="submit">Add Task</Button>
        </form>
      </Card>
    </div>
  );
};

export default TaskForm;
