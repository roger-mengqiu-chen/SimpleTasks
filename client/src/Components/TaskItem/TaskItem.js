import styles from "./TaskItem.module.css";

const TaskItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  let priority;
  if (props.priority) {
    priority = <p className={styles["task-priority"]}>{props.priority}</p>
  }

  return (
    <li className={styles["task-item"]} onClick={deleteHandler}>
      <div className={styles["task-meta"]}>
        <p className={styles["task-user"]}>{props.user}</p>
        {priority}
      </div>
      <p className={styles["task-task"]}>{props.task}</p>
    </li>
  );
};

export default TaskItem;
