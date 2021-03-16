import React from 'react';


const Score = ({ gameScore }) => {

    const scoreStyles = {
        backgroundColor: 'yellow',
        height: '140px',
        width: '100px'
    };

    return (
        <div style={scoreStyles}>
            <h2>score</h2>
            <p>{gameScore}</p>
        </div>
    );
};

export default Score;