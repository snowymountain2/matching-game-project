import React, { useState, useEffect, useRef } from 'react';
import Button from '@material-ui/core/Button';

const ButtonElement = ({ setBegin, begin, seconds }) => {

    const scoreTitle = {
        marginTop: '5px',
        marginBottom: '0px'
    };

    function showCardsTemporarily() {
        setBegin(!begin);
    }

    return (
        <div>
            <Button variant="contained" color="secondary" onClick={showCardsTemporarily}>
                Start
            </Button>
            <p>{seconds}</p>
        </div>
    );
};

export default ButtonElement;