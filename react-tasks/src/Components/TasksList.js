import React, { useState } from "react";
import TaskForm from './TaskForm';
import Task from './Task';
import '../stylesheet/TasksList.css'

function TasksList() {

  const [tasks, setTasks] = useState([]);



  return (
    <>
      <TaskForm />
      <div className='tasks-list-container'>
        {
          tasks.map((task) => 
            <Task 
              text={task.text}
              completada={task.complete}
            />
          )
        }
      </div>
    </>
  ); 
}

export default TasksList;