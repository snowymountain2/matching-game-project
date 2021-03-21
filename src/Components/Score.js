import React from 'react';


const Score = ({ gameScore }) => {

    const scoreTitle = {
        marginTop: '5px',
        marginBottom: '0px'
    };

    return (
        <div>
            <h2>{gameScore}</h2>
            <h4 style={scoreTitle}>score</h4>
        </div>
    );
};

export default Score;