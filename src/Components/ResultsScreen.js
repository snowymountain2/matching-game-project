import React, { useState, useEffect, useRef } from 'react';

const ResultsScreen = ({ gameOutcome }) => {

    const lostpopup = {
        position: "absolute",
        width: "300px",
        marginTop: "150px",
        left: "0",
        right: "0",
        margin: "auto",
        color: "white",
        backgroundColor: 'red',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        zIndex: '1',
    }

    const winpopup = {
        position: "absolute",
        width: "300px",
        marginTop: "150px",
        color: "white",
        left: "0",
        right: "0",
        margin: "auto",
        backgroundColor: 'green',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        zIndex: '1',
    }

    function outcomeMessage(gameOutcome) {
        switch (gameOutcome) {
            case "neither":
                return null;
                break;
            case "lost":
                return <div style={lostpopup}><h1>Better Luck Next Time</h1></div>;
                break;
            case "won":
                return <div style={winpopup}><h1>You Won!</h1></div>;
                break;
        }
    }

    return (
        <>
            <div>
                {outcomeMessage(gameOutcome)}
            </div>
        </>
    );
};

export default ResultsScreen;