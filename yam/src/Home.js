import { useSelector, useDispatch } from 'react-redux';
import { roll_dices } from './store/actions/actions-types';
import { useState, useEffect } from 'react';

function Home() {

  const [iteration, setIteration] = useState(0);
  const [results, setResults] = useState([]);

  const handleDispatch = () => {
    let newResults = []
    setResults(results => newResults);
    console.log(newResults, 'after clean');
    for(let i = 0; i < parseInt(iteration); i++) {
        newResults.push([
          Math.floor(Math.random()* 6 + 1),
          Math.floor(Math.random()* 6 + 1),
          Math.floor(Math.random()* 6 + 1),
          Math.floor(Math.random()* 6 + 1),
          Math.floor(Math.random()* 6 + 1),
        ])
    }
    setResults(results => newResults);
    console.log(newResults, 'after push');
  }

  // actions dispatch dans le reducer => newState 
  const dispatch = useDispatch();

  return (
    <div className="App">
      <p>Nombre d'expériences :</p>
      
      <input type="number" onChange={(e) => setIteration(e.target.value)} />
      <button onClick={() => iteration > 0 && handleDispatch()} > COUNT + 1 </button>
    </div>
  );
}

export default Home;
