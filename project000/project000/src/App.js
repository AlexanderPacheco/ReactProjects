import './App.css';
import {Testimonio} from './Components/Testimonio';

function App() {

  const cards = [{
      nombre:'Suzi Bae',
      image:'suzi',
      cargo:'Actress & singer',
      description:'Bae Su-ji, más conocida como Suzy, es una cantante, actriz y modelo surcoreana. Realizó su debut en la industria musical como integrante del grupo femenino miss A en 2010.'
    },{
      nombre:'The Witcher',
      image:'witcher',
      cargo:'El brujo Geralt',
      description:'Geralt de Rivia fue un legendario brujo de la Escuela del Lobo, activo durante el siglo XIII. Amaba a la hechicera Yennefer, a pesar de su tumultuosa relación, y era el padre adoptivo de Ciri. Como todos los brujos, Geralt era un cazador de monstruos a sueldo. Poseía habilidades sobrehumanas y era un maestro espadachín. Durante la Prueba de las Hierbas, Geralt exhibió una tolerancia inusual a los mutágenos que concedían a los brujos sus habilidades. Por lo tanto, Geralt fue expuesto a otros experimentos más fuertes, que le concedieron el pelo blanco, dándole mayor velocidad, fuerza y resistencia que sus compañeros brujos.'
    },{
      nombre:'Yennefer',
      image:'yennefer',
      cargo:'Hechicera',
      description:'Yennefer, nacida en la fiesta de Belleteyn de 1173, fue una hechicera que vivió en Vengerberg, la capital de Aedirn. Era el verdadero amor de Geralt de Rivia y una figura materna para Ciri, a quien veía como una hija hasta el punto en que hizo todo lo posible para rescatar a la niña y evitar que sufriera daños.'
    }];

  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Descripción de personajes</h1>

        {cards.map((card) => 
          <Testimonio 
            nombre={card.nombre}
            image={card.image}
            cargo={card.cargo}
            description={card.description} />
        )}
      </div>
    </div>
  );
}

export default App;
