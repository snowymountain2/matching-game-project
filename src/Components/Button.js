import React, { useState, useEffect, useRef } from 'react';
import Button from '@material-ui/core/Button';

const ButtonElement = ({ setStartButtonClick, startButtonClick, seconds, setSeconds, setRestartButton, restartButton }) => {

    const scoreTitle = {
        marginTop: '5px',
        marginBottom: '0px'
    };

    function showCardsTemporarily() {
        setStartButtonClick(!startButtonClick);
    }

    function restartButton() {
        setRestartButton(!restartButton);
    }

    return (
        <div>
            <Button variant="contained" disabled={startButtonClick ? true : false} color="secondary" onClick={showCardsTemporarily}>
                Start
            </Button>
            <Button variant="contained" color="primary" onClick={restartButton}>
                Restart
            </Button>
            <p>{seconds}</p>
        </div>
    );
};

export default ButtonElement;