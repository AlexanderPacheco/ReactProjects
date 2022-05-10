import logo from './logo.svg';
import './App.css';
import {Testimonio} from './Components/Testimonio';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Descripción de personajes</h1>
        <Testimonio 
          nombre='The Witcher'
          image=''
          cargo='El brujo Geralt'
          description='Geralt de Rivia fue un legendario brujo de la Escuela del Lobo, activo durante el siglo XIII. Amaba a la hechicera Yennefer, a pesar de su tumultuosa relación, y era el padre adoptivo de Ciri. Como todos los brujos, Geralt era un cazador de monstruos a sueldo. Poseía habilidades sobrehumanas y era un maestro espadachín. Durante la Prueba de las Hierbas, Geralt exhibió una tolerancia inusual a los mutágenos que concedían a los brujos sus habilidades. Por lo tanto, Geralt fue expuesto a otros experimentos más fuertes, que le concedieron el pelo blanco, dándole mayor velocidad, fuerza y resistencia que sus compañeros brujos.'
          />
      </div>
    </div>
  );
}

export default App;
