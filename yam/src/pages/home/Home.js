import { useSelector, useDispatch } from 'react-redux';
import { reset_points, suite, brelan } from '../../store/actions/actions-types';
import { useState, useEffect } from 'react';
import { HomeContainer } from './Home.styles';

function Home() {

  const [iteration, setIteration] = useState(0);
  const [results, setResults] = useState([]);

  const suiteValues = ['12345', '23456']
  const brelanValues = ['111', '222', '333', '444', '555', '666']

  const dispatch = useDispatch();
  const { total, nbSuite, nbBrelan } = useSelector(state => state.game.gameResults);

  // fonction pour trier les résultats, ne renvoyer que les résultats gagnants et les dispatch avec la bonne méthode dans le store
  const sortType = (result) => {
    suiteValues.filter(value => result.includes(value)).length > 0 && ( dispatch(suite()) )
    brelanValues.filter(value => result.includes(value)).length > 0 && ( dispatch(brelan()) )
  }

  //fonction qui générère les résultats aléatoires
  const handleDispatch = () => {
    let newResults = []
    setResults(results => newResults);
    console.log(newResults, 'after clean');
    for(let i = 0; i < parseInt(iteration); i++) {
      const newArr = [
        Math.floor(Math.random()* 6 + 1),
        Math.floor(Math.random()* 6 + 1),
        Math.floor(Math.random()* 6 + 1),
        Math.floor(Math.random()* 6 + 1),
        Math.floor(Math.random()* 6 + 1)
      ]
      sortType(newArr.sort(function(a, b){return a-b}).join(''))
    }
    setResults(results => newResults);
    console.log(newResults, 'after push'); 
  }

  return (
    <HomeContainer>
      <p>Nombre d'expériences :</p>
      
      <input type="number" onChange={(e) => setIteration(e.target.value)} />
      <button onClick={() => iteration > 0 && (
        dispatch(reset_points()),
        handleDispatch()
      )}> COUNT + 1 </button>
      <p>Nombre de suite : {nbSuite}</p>
      <p>Nombre de brelan : {nbBrelan}</p>
      <p>Nombre de pts : {total}</p>
    </HomeContainer>
  );
}

export default Home;
