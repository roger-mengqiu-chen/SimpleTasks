import styles from "./TaskItem.module.css";

const TaskItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className={styles["task-item"]} onClick={deleteHandler}>
      <p>{props.user}</p>
      <p>{props.task}</p>
      <p>{props.priority}</p>
    </li>
  );
};

export default TaskItem;
