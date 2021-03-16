import React from 'react';


const Score = ({ gameScore }) => {

    const scoreTitle = {
        marginTop: '5px',
        marginBottom: '0px'
    };

    return (
        <div>
            <h2 style={scoreTitle}>score</h2>
            <p>{gameScore}</p>
        </div>
    );
};

export default Score;