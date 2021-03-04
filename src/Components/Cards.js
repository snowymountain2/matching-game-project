import React, { useState, useEffect } from 'react';
import Card from './Card';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import { shuffle } from '../Helper';

const easyNumbers = [1, 2, 3, 4, 4, 3, 2, 1];
const mediumNumbers = [1, 2, 3, 4, 5, 6, 6, 5, 4, 3, 2, 1];
const hardNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 6, 5, 4, 3, 2, 1];

const Cards = ({ thegameMode }) => {

    const allCards = {
        display: 'flex',
        margin: 'auto',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        backgroundColor: 'gray',
        marginLeft: "8vw",
        marginRight: "8vw"
    };

    const [cardvalues, setCardValues] = useState(shuffle(easyNumbers));

    useEffect(() => {
        console.log(cardvalues);
        console.log(thegameMode);

        if (thegameMode === "easy") {
            setCardValues(shuffle(easyNumbers));
        }
        else if (thegameMode === "medium") {
            setCardValues(shuffle(mediumNumbers));
        }
        else {
            setCardValues(shuffle(hardNumbers));
        }
    }, [thegameMode]);

    return (
        <>
            <div style={allCards}>
                {cardvalues.map((num, index) => {
                    return <Card id={index} number={num} />
                })}
            </div>
        </>
    );
};

export default Cards;