import logo from './logo.svg';
import './App.css';
import Cards from './Components/Cards'
import Mode from './Components/Mode'
import Score from './Components/Score'
import ButtonElement from './Components/Button'
import { useState, useEffect, useRef } from 'react';
import { cardListEasy, cardListMed, cardListHard } from './cardslist';
import { shuffle } from './Helper';

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
  const [begin, setBegin] = useState(false);
  const [seconds, setSeconds] = useState(10);

  const selectCardSet = (mode) => {
    if (mode === "easy") {
      return cardvalueseasy;
    } else if (mode === "medium") {
      return cardvaluesmed;
    } else {
      return cardvalueshard;
    }
  }

  const didMountRefAttempt = useRef(false);
  const didMountRefCompValues = useRef(false);
  const didMountRefTimeValues = useRef(false);


  useEffect(() => {
    if (didMountRefAttempt.current) {
      return setAttempt({ ...attempt, attempt: attempt.attempt + 1 });
    } else {
      return didMountRefAttempt.current = true;
    }
  }, [attempt.attemptComparisonValues])

  /* variables to help w/ array handling */
  let GetLastCardValue = () => {
    return attempt.attemptComparisonValues.length - 1;
  }
  let GetSecondLastCardValue = () => {
    return attempt.attemptComparisonValues.length - 2;
  }


  useEffect(() => {
    /* if 1st attempt - do nothing */
    if (didMountRefCompValues.current) {
      if (attempt.attempt % 2 !== 0) {
        return console.log('attempt1');
      }
      /* if 2nd attempt - handle both correct or wrong situations */
      else {
        /* if 2nd attempt wrong */
        if (attempt.attemptComparisonValues[GetLastCardValue()] !== attempt.attemptComparisonValues[GetSecondLastCardValue()]) {
          return console.log('gameover');
        }
        /* if 2nd attempt [correct] AND wasn't final match - add 1 point to score */
        else if (attempt.attemptComparisonValues[GetLastCardValue()] === attempt.attemptComparisonValues[GetSecondLastCardValue()]
          &&
          attempt.attempt !== maxScore) {
          console.log('you got one right')
          return setScore(prevState => prevState + 1);
        }
        /* if 2nd attempt [correct] AND final match - add 1 point to score & say victory */
        else {
          setScore(prevState => prevState + 1);
          return console.log('congratz you won');
        }
      }
    } else {
      return didMountRefCompValues.current = true;
    }
  }, [attempt.attempt])

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

  /* updating the card flip status when the game starts */

  const selectCardUpdateMethod = (mode, theUpdatedList) => {
    if (mode === "easy") {
      return setEasyCardValues([...theUpdatedList]);
    } else if (mode === "medium") {
      return setMedCardValues([...theUpdatedList]);
    } else {
      return setHardCardValues([...theUpdatedList]);
    }
  }
  useEffect(() => {
    if (begin) {
      let updatedList = selectCardSet(gameMode).map(item => {
        return { ...item, card_flipped: true };
      })
      selectCardUpdateMethod(gameMode, updatedList);
    } else {
      let updatedList = selectCardSet(gameMode).map(item => {
        return { ...item, card_flipped: false };
      })
      selectCardUpdateMethod(gameMode, updatedList);
    }
  }, [begin])

  // handles the timer functionlity when the start button is clicked
  useEffect(() => {
    if (didMountRefTimeValues.current) {
      if (seconds > 0) {
        setTimeout(() => {
          setSeconds(prevState => prevState - 1);
        }, 1000);
      }
      else if (seconds === 0 && begin == true) {
        setBegin(!begin);
      }
      else {
        return;
      }
    }
    else {
      didMountRefTimeValues.current = true;
    }
  }, [seconds, begin])


  /*
  3/16 the large useEffect is messing up the card ordering - when 
  i removed it, the ordering was correct again 
  3/16 pt 2 - update .map method that's rendering cards to be more constant so it won't dynamically change
  
 
  */

  return (
    <div className="App">
      <h1> Memory Game </h1>
      <div style={menuStyles}>
        <ButtonElement setBegin={setBegin} begin={begin} seconds={seconds}>
        </ButtonElement>
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




