import React, { useState } from 'react';
import '../stylesheet/TaskForm.css';
import { v4 as uuidv4 } from 'uuid';

function TaskForm(props) {

  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const handleSend = e => {
    e.preventDefault(); /* Permite no cargar la aplicacion al mandar algo */
    console.log('Sending...')
    const newTask = {
      id: uuidv4(),
      text: input,
      complete: false
    };

    console.log(newTask);

    props.onSubmit(newTask); /* Este es un evento del padre */
  };

  return(
    <form 
      className="task-form"
      onSubmit={handleSend}>
      <input 
        className='task-input'
        type='text'
        placeholder='Write task'
        name='text'
        onChange={handleChange}
      />
      <button className='task-button'>
        add task
      </button>
    </form>
  );
}

export default TaskForm;