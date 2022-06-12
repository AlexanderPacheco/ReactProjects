import {Link} from 'react-router-dom';

const userId = 'alex';

export default function HomePage() {
  return (
    <div>

      <h1>Applications</h1>

      <Link to={`/users/${userId}`}>Usuarios</Link>

    </div>
  );
}