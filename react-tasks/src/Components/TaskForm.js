import React from 'react';
import '../stylesheet/TaskForm.css'

function TaskForm(props) {
  return(
    <form className="task-form">
      <input 
        className='task-input'
        type='text'
        placeholder='Write task'
        name='text'
      />
      <button className='task-button'>
        add task
      </button>
    </form>
  );
}

export default TaskForm;