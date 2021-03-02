import logo from './logo.svg';
import './App.css';
import Cards from './Components/Cards'
import Menu from './Components/Menu'
import Mode from './Components/Mode'
import { useState } from 'react';
import { shuffle } from './Helper';

function App() {

  const [gameMode, setGameMode] = useState("easy");
  const nums = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="App">
      <h1> memory game </h1>
      {console.log(shuffle(nums))}

      <Mode thegameMode={gameMode} setGameMode={setGameMode} />

      <Cards thegameMode={gameMode} />

    </div>
  );
}

export default App;
