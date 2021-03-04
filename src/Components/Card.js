import React from 'react';

const singleCard = {
    backgroundColor: 'yellow',
    margin: '5px 5px 5px 5px',
    height: '140px',
    width: '100px'
};

const Card = ({ number }) => {
    return (
        <div style={singleCard} className="single-card">
            {number}
        </div>
    );
};

export default Card;