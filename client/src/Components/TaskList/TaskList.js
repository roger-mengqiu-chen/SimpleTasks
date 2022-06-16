import TaskItem from "../TaskItem/TaskItem";
import styles from "./TaskList.module.css";

const TaskList = (props) => {
  return (
    <ul className={styles["task-list"]}>
      {props.tasks.map((task) => (
        <TaskItem key={task.id} id={task.id} onDelete={props.onDeleteTask} user={task.user} task={task.task} priority={task.priority}>
        </TaskItem>
      ))}
    </ul>
  );
};

export default TaskList;
