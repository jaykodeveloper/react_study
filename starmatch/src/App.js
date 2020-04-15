import React, { useState } from 'react';
import './App.scss';
import StarMatch from './components/StarMatch'

function App() {
  const [gameId, setGameId] = useState(1);
  return (
    <div className="App">
      <StarMatch  key={gameId} resetGame={() => setGameId(gameId + 1)}/>
    </div>
  );
}

export default App;
