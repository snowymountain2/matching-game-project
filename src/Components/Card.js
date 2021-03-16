import React from 'react';
import { useState } from 'react';


const singleCard = {
    backgroundColor: 'yellow',
    margin: '5px 5px 5px 5px',
    height: '140px',
    width: '100px'
};

const notdisplay = {
    backgroundColor: 'red'
};


const Card = ({ icon, changeStatus, cardFlipped, id, comparisonValue, setAttemptCount, attempt, setScore }) => {

    const updateComparisonValues = (comparisonValue) => {
        setAttemptCount({ ...attempt, attemptComparisonValues: [...attempt.attemptComparisonValues, comparisonValue] });
    }

    const cardFlippp = (id, comparisonValue) => {
        changeStatus(id);
        updateComparisonValues(comparisonValue);

    }
    return (
        <div style={singleCard} className="single-card" onClick={() => cardFlippp(id, comparisonValue)}>
            {cardFlipped ? icon : null}
            <p>id:{id}</p>
            {comparisonValue}

        </div>
    );
};

export default Card;


{/*
 
    const updateAttemptCount = (attemptState) => {
        return attemptState + 1;
    }

    const updateComparisonValues = (comparisonValue) => {
        setAttemptCount({ ...attempt, attemptComparisonValues: [...attempt.attemptComparisonValues, comparisonValue] });
    }

    const cardFlippp = (id, comparisonValue) => {
        changeStatus(id);
        setAttemptCount({ ...attempt, score: updateAttemptCount(attempt.score) });
        updateComparisonValues(comparisonValue);

    }
  

  */ }