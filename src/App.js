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
