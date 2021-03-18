import React from 'react';
import { useState } from 'react';


const singleCard = {
    backgroundColor: 'gray',
    margin: '5px 5px 5px 5px',
    height: '140px',
    width: '100px',
    paddingTop: '8px'
};

const Card = ({ icon, changeStatus, cardFlipped, id, comparisonValue, setAttemptCount, attempt, setScore }) => {

    const updateComparisonValues = (comparisonValue) => {
        setAttemptCount({ ...attempt, attemptComparisonValues: [...attempt.attemptComparisonValues, comparisonValue] });
    }

    async function cardFlippp(id, comparisonValue) {
        await changeStatus(id);
        updateComparisonValues(comparisonValue);

    }
    return (
        <div style={singleCard} className="single-card" onClick={() => cardFlippp(id, comparisonValue)}>

            {cardFlipped ? icon : null}

        </div>
    );
};

export default Card;
