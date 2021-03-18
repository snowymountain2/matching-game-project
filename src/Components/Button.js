import React from 'react';
import Button from '@material-ui/core/Button';

const ButtonElement = ({ setBegin, begin }) => {

    const scoreTitle = {
        marginTop: '5px',
        marginBottom: '0px'
    };

    function showCardsTemporarily() {
        setBegin(!begin);
        setTimeout(() => {
            setBegin(begin);
        }, 3000)
    }


    return (
        <div>
            <Button variant="contained" color="secondary" onClick={showCardsTemporarily}>
                Start

            </Button>
        </div>
    );
};

export default ButtonElement;