import TaskList from "./Components/TaskList/TaskList";
import TaskForm from "./Components/TaskForm/TaskForm";
import { useState } from "react";
import './App.css';

function App() {

  const [tasks, setTasks] = useState([
    {task: 'Do exercise', id: '1'},
    {task: 'Finish the course', id: '2'}
  ]);

  const deleteTaskHandler = taskId => {
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.filter(t => t.id !== taskId);
      return updatedTasks;
    })
  }

  const addTaskHandler = task => {
    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks];
      updatedTasks.unshift({task: task, id: Math.random().toString()});
      return updatedTasks;
    })
  }

  let content = (
    <p style={{textAlign: 'center'}}>No task found</p>
  );
  

  if(tasks.length > 0) {
    content = (
      <TaskList tasks={tasks} onDeleteTask={deleteTaskHandler} />
    )
  }


  return (
    <div>
      <TaskForm onAddTask={addTaskHandler}/>
      <div>
        {content}
      </div>
    </div>
  );
}

export default App;
