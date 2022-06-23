import { useState } from "react";
import TaskList from "../TaskList/TaskList";
import TaskForm from "../TaskForm/TaskForm";
import classes from "./TaskApp.module.css";

const TaskApp = (props) => {
  const [tasks, setTasks] = useState([]);

  const deleteTaskHandler = (taskId) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((t) => t.id !== taskId);
      return updatedTasks;
    });
  };

  const addTaskHandler = (task, user, priority) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks.unshift({
        task: task,
        user: user,
        priority: priority,
        id: Math.random().toString(),
      });
      return updatedTasks;
    });
  };

  let content = <p style={{ textAlign: "center" }}>No task found</p>;

  if (tasks.length > 0) {
    content = <TaskList tasks={tasks} onDeleteTask={deleteTaskHandler} />;
  }

  return (
    <div className={classes.taskApp}>
      <TaskForm onAddTask={addTaskHandler} />
      <div>{content}</div>
    </div>
  );
};

export default TaskApp;