import { useState } from "react";

export const TaskCreator = ({ createTask }) => {

  const [newTaskName, setNewTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(newTaskName);
    setNewTaskName("");
  };

  return (
    <form onSubmit={handleSubmit} className='my-2 row'>
      <div className='col-9'>
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          className='form-control col-md-8'
        />
      </div>
      <div className='col-3'>
        <button className='btn btn-primary btn-sm'>Save</button>
      </div>
    </form>
  );
};
