import { useState, useEffect } from 'react';
import "./App.css";
import { TaskCreator } from './components/TaskCreator'
import { TaskTable } from './components/TaskTable'
import { VisibilityControl } from './components/VisibilityControl'
import { Container } from './components/Container';

function App() {

  const [tasksItems, setTasksItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  function createTask(taskName){
    if (!tasksItems.find(task => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
    }
  }

  const toggleTask = task => {
    setTasksItems(tasksItems.map(t => (t.name === task.name) ? {...t, done: !t.done} : t));
  }

  const cleanTasks = () => {
    setTasksItems(tasksItems.filter(task => !task.done))
    setShowCompleted(false)
  }

  useEffect(() => {
    const data = localStorage.getItem('tasks')
    if (data){
      setTasksItems(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksItems));
  }, [tasksItems]);

  return (
    <main className="bg-dark vh-100 text-white">
      
      <Container>
        <TaskCreator createTask={createTask} />

        <TaskTable tasks={tasksItems} toggleTask={toggleTask} />

        <VisibilityControl 
          isChecked={showCompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)} 
          cleanTasks={cleanTasks}
        />

        {
          showCompleted === true && (
            <TaskTable tasks={tasksItems} toggleTask={toggleTask} showCompleted={showCompleted} />
          )
        }
      </Container>

    </main>
  );
}

export default App;
