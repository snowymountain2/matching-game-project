import React from 'react';
import { useState } from 'react';


const singleCard = {
    backgroundColor: 'white',
    margin: '5px 5px 5px 5px',
    height: '140px',
    width: '100px',
    paddingTop: '8px',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'

};

const Card = ({ icon, changeStatus, front, cardFlipped, id, comparisonValue, setAttemptCount, attempt, setScore }) => {

    const updateComparisonValues = (comparisonValue) => {
        setAttemptCount({ ...attempt, attemptComparisonValues: [...attempt.attemptComparisonValues, comparisonValue] });
    }

    async function cardFlippp(id, comparisonValue) {
        await changeStatus(id);
        updateComparisonValues(comparisonValue);

    }
    return (
        <div style={singleCard} className="single-card" onClick={() => cardFlippp(id, comparisonValue)}>

            {cardFlipped ? icon : front}

        </div>
    );
};

export default Card;
