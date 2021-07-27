import './App.css';
import { useEffect, useState } from 'react';
import { newGameDeck } from './services/card-api';
import GameTable from './components/GameTable/GameTable';

function App() {

  const [ deckData, setDeckData ] = useState({})
  const [ scores, setScores ] = useState([])

  async function newGame() {
    const data = await newGameDeck()
    setDeckSata(data)
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
        <GameTable
        
        />
    </div>
  );
}

export default App;
