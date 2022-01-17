/* ---------------- CLASE 1 DE REACT
import './App.css';

function Bandas(props) {
  return (
    <div>
      El cantante de <b className='nombre--banda'>{props.banda}</b>
       es: <b>{props.cantante} </b> 
      y su tema más famoso es: <b>{props.tema}</b>
    </div>
  );
}

function App() {
  // Arrays utilizados para el componente <Bandas />
  const zen = ['ZEN', 'Jhovan Tomasevich', 'Quédate'];
  const nox = ['NoRecomendable', 'Edson lara', 'Todo está bien'];
  const amen = ['Amén', 'Marcelo Motta', 'Te quiero'];
  const nirvana = ['Nirvana', 'Kurt Cobain', 'Smells like teen spirit']
  return (
    <div>
      <Bandas 
      banda={zen[0]} 
      cantante={zen[1]}
      tema={zen[2]}
      />
      <Bandas   
      banda={nox[0]} 
      cantante={nox[1]}
      tema={nox[2]}
      />
      <Bandas  
      banda={amen[0]} 
      cantante={amen[1]}
      tema={amen[2]}
      />
      <Bandas 
      banda={nirvana[0]} 
      cantante={nirvana[1]}
      tema={nirvana[2]}
      />
    </div>
  );
}

export default App;
*/

import './App.css';
import {useState} from 'react';

function App() {
  const [contador, setContador] = useState(0);
  const esPar = contador % 2 === 0;
  const numeroDiez = contador === 10;
  const resetearContador = () => {
    setContador(0);
  }
  return (
    <div>
      {contador}
      <br />
      <button onClick={() => {
        setContador(contador + 1);
      }}>
        aumentar
      </button>
      {/* Si vas a llamar a una función, no se pone el () */}
      <button onClick={resetearContador}>
        resetear
      </button>
      <br />
      {esPar ? 'Es par' : 'Es impar'}
      <br />
      {numeroDiez ? 'Este es el número 10' : ''}
    </div>
  );
}

export default App;
