import logo from './logo.svg';
import './App.css';
import Cards from './Components/Cards'
import Menu from './Components/Menu'
import Mode from './Components/Mode'
import { useState } from 'react';

function App() {

  const [gameMode, setGameMode] = useState("easy");

  return (
    <div className="App">
      <h1> Memory Game </h1>

      <Mode thegameMode={gameMode} setGameMode={setGameMode} />

      <Cards thegameMode={gameMode} />

    </div>
  );
}
export default App;
