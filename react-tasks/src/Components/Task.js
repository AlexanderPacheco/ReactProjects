import React from 'react';
import '../stylesheet/Task.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Task({text, complete }) {
  return (
    <div className={complete ? 'task-container complete' : 'task-container'} >
      <div className='task-text'>
        {text}
      </div>
      <div className='task-container-icons'>
        <AiOutlineCloseCircle className='task-icon' />
      </div>
    </div>
  );
}

export default Task;