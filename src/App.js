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
  const [attempt, setAttempt] = useState(0);

  {/* 3/10 last left off by adding attempt functionality. i established state for it 
    and have it firing correctly when a card is flipped (i was console logging it). 
    here is the logic i need to implement: 

      1. starts at 0
      2. when user flips a card the attempt counter increases by 1
      3. when user flips a 2nd card: 
          1. if comparison from attempt 1 and attempt 2 are same then (game continues) and (score increases by) 
          2. if comparison does not equal game over - (score does not increase) 

  */ }

  return (
    <div className="App">
      <h1> Memory Game </h1>
      {console.log(attempt)}
      <Mode thegameMode={gameMode} setGameMode={setGameMode} />

      <Cards easyList={cardvalueseasy}
        medList={cardvaluesmed}
        hardList={cardvalueshard}
        thegameMode={gameMode}
        updateeasyList={setEasyCardValues}
        updatemedList={setMedCardValues}
        updatehardList={setHardCardValues}
        setAttempts={setAttempt}
      />

    </div>
  );
}
export default App;




