import logo from './logo.svg';
import './App.css';
import Cards from './Components/Cards'
import Mode from './Components/Mode'
import Score from './Components/Score'
import { useState, useEffect, useRef } from 'react';
import { cardListEasy, cardListMed, cardListHard } from './cardslist';
import { shuffle, selectCardSet } from './Helper';

function App() {

  const menuStyles = {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginLeft: "8vw",
    marginRight: "8vw"
  };

  let attemptObject = {
    attempt: 0,
    attemptComparisonValues: []
  }

  const [gameMode, setGameMode] = useState("easy");
  const [cardvalueseasy, setEasyCardValues] = useState(shuffle(cardListEasy));
  const [cardvaluesmed, setMedCardValues] = useState(shuffle(cardListMed));
  const [cardvalueshard, setHardCardValues] = useState(shuffle(cardListHard));
  const [attempt, setAttempt] = useState(attemptObject);
  const [maxScore, setMaxScore] = useState(0);
  const [score, setScore] = useState(0);

  const selectCardSet = (mode) => {
    if (mode === "easy") {
      return cardListEasy.length;
    } else if (mode === "medium") {
      return cardListMed.length;
    } else {
      return cardListHard.length;
    }
  }

  const didMountRefAttempt = useRef(false);
  const didMountRefCompValues = useRef(false);

  useEffect(() => {
    if (didMountRefAttempt.current) {
      return setAttempt({ ...attempt, attempt: attempt.attempt + 1 });
    } else {
      return didMountRefAttempt.current = true
    }
  }, [attempt.attemptComparisonValues])

  /* variables to help w/ array handling */
  let GetLastCardValue = () => {
    return attempt.attemptComparisonValues.length - 1;
  }
  let GetSecondLastCardValue = () => {
    return attempt.attemptComparisonValues.length - 2;
  }




  /*used to keep track of current card list array length */
  useEffect(() => {
    if (gameMode === "easy") {
      let easyLength = cardListEasy.length;
      return setMaxScore(easyLength);
    } else if (gameMode === "medium") {
      let medLength = cardListMed.length;
      return setMaxScore(medLength);
    } else {
      let hardLength = cardListHard.length;
      return setMaxScore(hardLength);
    }
  }, [gameMode])


  /*
  3/16 the large useEffect is messing up the card ordering - when 
  i removed it, the ordering was correct again 
  3/16 pt 2 - update .map method that's rendering cards to be more constant so it won't dynamically change

 
  */

  return (
    <div className="App">
      <h1> Memory Game </h1>
      <div style={menuStyles}>
        <Mode thegameMode={gameMode} setGameMode={setGameMode} setScore={setScore} />
        <Score gameScore={score} />
      </div>

      <Cards easyList={cardvalueseasy}
        medList={cardvaluesmed}
        hardList={cardvalueshard}
        thegameMode={gameMode}
        updateeasyList={setEasyCardValues}
        updatemedList={setMedCardValues}
        updatehardList={setHardCardValues}
        setAttempts={setAttempt}
        attempt={attempt}
        setScore={setScore}
      />

    </div>
  );
}
export default App;




