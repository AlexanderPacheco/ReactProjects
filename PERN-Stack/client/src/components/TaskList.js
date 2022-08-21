import { useEffect, useState } from "react"
import { Button, Card, CardContent, Typography } from '@mui/material'
import { useNavigate } from "react-router-dom"

export default function TaskList() {

  const [ tasks, setTasks ] = useState([]);
  const navigate = useNavigate();
  
  const loadTasks = async () => {
    try {
      const res = await fetch('http://localhost:4000/tasks');
      const data = await res.json();
      setTasks(data);
    }catch(err) {
      console.log(err);
    }
  }

  const handleDelete = async (id) => {
    try{
      await fetch(`http://localhost:4000/tasks/${id}`, {
        method: 'DELETE'
      });
      //With this we don't need to do another request to the server to get the updated list of tasks
      setTasks(tasks.filter(task => task.id !== id));
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    loadTasks();
  }, [])

  return (
    <>
      <h1>Task List</h1>
      {
        tasks.map((task) => ( 
          <Card 
            style={{ 
              marginBottom: '.7rem',
              backgroundColor: '#1e272e',
            }}
            key={task.id}
          >
            <CardContent style={{ 
              display: 'flex',
              justifyContent: 'space-between',
            }}>
              <div style={{ color: 'white'}}>
                <Typography>{ task.title }</Typography>
                <Typography>{ task.description }</Typography>
              </div>
              <div>
                <Button 
                  variant='contained' 
                  color='inherit'
                  onClick={() => navigate(`/tasks/${task.id}/edit`)} 
                >
                  Edit
                </Button>
                <Button
                  variant='contained' 
                  color='warning'
                  onClick={() => handleDelete(task.id) }
                  style={{ marginLeft: '.5rem' }}
                >
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))
      }
    </>
  )
}
