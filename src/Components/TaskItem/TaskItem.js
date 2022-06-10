import styles from "./TaskItem.module.css";

const TaskItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className={styles["task-item"]} onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default TaskItem;
