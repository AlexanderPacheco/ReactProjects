import {useNavigate, Link, Outlet} from 'react-router-dom'

export default function Dashboard() {

  const navigate = useNavigate();

  const handleClick = () => {
    //Me redirige a home
    navigate('/')
  }

  return (
    <div>
      <h1>Dashboard</h1>

      <button onClick={handleClick}>
        Logout
      </button>
      <br/>
      <Link to='welcome'>
        Say welcome
      </Link>
      <br/>
      <Link to='goodbye'>
        Say Goodbye
      </Link>

      <Outlet />
    </div>
  )
}
