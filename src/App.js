import logo from './logo.svg';
import './App.css';
import Cards from './Components/Cards'
import Menu from './Components/Menu'
import Mode from './Components/Mode'
import { useState } from 'react';

function App() {

  const [gameMode, setGameMode] = useState("easy");

  let tempcardList = [
    {
      id: 1,
      comparisonvalue: 1,
      icon: 'car',
      card_flipped: false
    },
    {
      id: 2,
      comparisonvalue: 1,
      icon: 'hellllo',
      card_flipped: false
    },
    {
      id: 3,
      comparisonvalue: 2,
      icon: 'bus',
      card_flipped: false
    },
    {
      id: 4,
      comparisonvalue: 2,
      icon: 'bus',
      card_flipped: false
    }];


  return (
    <div className="App">
      <h1> Memory Game </h1>

      <Mode thegameMode={gameMode} setGameMode={setGameMode} />

      <Cards thegameMode={gameMode} thelistofcards={tempcardList} />

    </div>
  );
}
export default App;
