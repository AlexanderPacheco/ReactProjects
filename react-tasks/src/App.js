import './App.css';
import freeCodeCampLogo from './images/freeCodeCamp.png';
import TasksList from './Components/TasksList';

function App() {
  return (
    <div className='application-tasks'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='freeCodeCamp Logo' />
      </div>
      <div className='main-tasks-list'>
        <h1>My Tasks</h1>
        <TasksList />
      </div>
    </div>
  );
}

export default App;
