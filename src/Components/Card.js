import React from 'react';
import { useState } from 'react';


const singleCard = {
    backgroundColor: 'yellow',
    margin: '5px 5px 5px 5px',
    height: '140px',
    width: '100px'
};


const Card = ({ icon, setFlipStatus, flipStatus, changeStatus, cardFlipped, id }) => {

    const cardFlip = () => {
        changeStatus(id);
    }

    return (
        <div style={singleCard} className="single-card" onClick={cardFlip}>
            <div className="symbol">
                {/* add ternary oppoerator here for the object property with icon
             { showResults ? <Results /> : null }
            */}
                {console.log(cardFlipped)}
            </div>
        </div>
    );
};

export default Card;