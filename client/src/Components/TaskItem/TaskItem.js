import styles from "./TaskItem.module.css";

const TaskItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  let priority;
  if (props.priority) {
    priority = <p className={styles["task-priority"]}>{props.priority}</p>
  }

  let itemStyle = "";
  switch(props.priority) {
    case "High": itemStyle = "high"; break;
    case "Medium": itemStyle = "medium"; break;
    case "Low": itemStyle = "low"; break;
    default: break;
  }

  return (
    <li className={`${styles["task-item"]} ${styles[itemStyle]}`}onClick={deleteHandler}>
      <div className={styles["task-meta"]}>
        <p className={styles["task-user"]}>{props.user}</p>
        {priority}
      </div>
      <p className={styles["task-task"]}>{props.task}</p>
    </li>
  );
};

export default TaskItem;
