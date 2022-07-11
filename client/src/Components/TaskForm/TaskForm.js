import Button from "../UI/Button/Button";
import styles from "./TaskForm.module.css";
import Card from "../UI/Card/Card";
import Modal from "../UI/Modal/Modal";
import { useState, useRef } from "react";

const TaskForm = (props) => {
  const titleInputRef = useRef();
  const taskInputRef = useRef();
  const priorityRef = useRef();

  const [error, setError] = useState();
  const [isTaskValid, setTaskIsValid] = useState(true);
  const [isTitleValid, setTitleIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const title = titleInputRef.current.value;
    const task = taskInputRef.current.value;
    const priority = priorityRef.current.value;

    let formValid = true;
    if (title.trim().length === 0) {
      setTitleIsValid(false);
      formValid = false;
    }
    if (task.trim().length === 0) {
      setTaskIsValid(false);
      formValid = false;
    }

    let msgTitle = "";
    let message = "";

    if (!formValid) {
      msgTitle = "Invalid input";
      message = "Title or task should not be empty";
      setError({ title: msgTitle, message: message });
    }

    if (formValid) {
      setTaskIsValid(true);
      setTitleIsValid(true);
      props.onAddTask(task, title, priority);
      taskInputRef.current.value = "";
      titleInputRef.current.value = "";
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
          <label className={styles["task-label"]} htmlFor="titleInput">
            Title
          </label>
          <input
            className={`${styles["task-input"]} ${
              !isTitleValid && styles.invalid
            }`}
            id="titleInput"
            ref={titleInputRef}
          ></input>
          <label className={styles["task-label"]} htmlFor="taskInput">
            Task
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
