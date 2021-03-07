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


const Card = ({ icon, changeStatus, cardFlipped, id, comparisonValue }) => {

    const cardFlippp = (id) => {
        changeStatus(id);
    }
    return (
        <div style={singleCard} className="single-card" onClick={() => cardFlippp(id)}>
            {cardFlipped ? icon : null}
            <p>id:{id}</p>
        </div>
    );
};

export default Card;