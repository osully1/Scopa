import './App.css';
import { useEffect, useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { newGameDeck } from './services/card-api';
import GameTable from './components/GameTable/GameTable';

function App() {

  const [ deckData, setDeckData ] = useState({})
  const [ scores, setScores ] = useState([])

  // Sets state with deck_id
  async function newGame() {
    const data = await newGameDeck()
    setDeckData(data)
  }

  // Creates new scopa deck when app launches. Sets data to deckData state
  useEffect(() => {
    newGame();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path = '/' render={(props) =>
            <GameTable
              deckData={deckData}
              setDeckData={setDeckData}
            />
          } />
        </Switch>
      </header>
    </div>
  );
}

export default App;
