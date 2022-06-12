import  {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import UsersPage from './pages/UsersPage';
import NotFoundPage from './pages/NotFoundPage';

import UserPage from './pages/UserPage';
import Navbar from './Components/Navbar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/users' element={<UsersPage />} />
        <Route path='/usuarios' element={<Navigate to='/users' />} />
        <Route path='/users/:id' element={<UserPage />} />
        <Route path='/users/new' element={<p>New user</p>} />
        {/*<Route path='/dashboard/*' element={<Dashboard />} >
          <Route path='welcome' element={<Welcome />} >
            <Route path='child' element={<p>Child!!</p>} />
          </Route>
          <Route path='goodbye' element={<p>Goodbye!!</p>} />
        </Route>
        */}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
