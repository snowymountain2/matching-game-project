import logo from './logo.svg';
import './App.css';
import Cards from './Components/Cards'
import Menu from './Components/Menu'
import Mode from './Components/Mode'
import { useState, useEffect } from 'react';
import { cardListEasy, cardListMed, cardListHard } from './cardslist';
import { shuffle, selectCardSet } from './Helper';

function App() {

  const [gameMode, setGameMode] = useState("easy");
  const [cardvalueseasy, setEasyCardValues] = useState(cardListEasy);
  const [cardvaluesmed, setMedCardValues] = useState(cardListMed);
  const [cardvalueshard, setHardCardValues] = useState(cardListHard);


  {/* need to build in functionality of game mode and cards getting rendered out */ }

  return (
    <div className="App">
      <h1> Memory Game </h1>

      <Mode thegameMode={gameMode} setGameMode={setGameMode} />

      <Cards easyList={cardvalueseasy}
        medList={cardvaluesmed}
        hardList={cardvalueshard}
        thegameMode={gameMode}
      />

    </div>
  );
}
export default App;




