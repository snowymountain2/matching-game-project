import React, { useState, useEffect } from 'react';
import Card from './Card';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import { shuffle } from '../Helper';
import { cardList2020 } from '../cardslist';

const Cards = ({ thegameMode }) => {

    let cardList2021 = JSON.parse(JSON.stringify(cardList2020));
    console.log(`top of file ${JSON.stringify(cardList2021.easy)}`);



    const tempcardList = [
        {
            id: 1,
            comparisonvalue: 1,
            icon: 'car',
            card_flipped: false
        },
        {
            id: 2,
            comparisonvalue: 1,
            icon: 'car',
            card_flipped: false
        },
        {
            id: 3,
            comparisonvalue: 2,
            icon: 'bus',
            card_flipped: false
        },
        {
            id: 4,
            comparisonvalue: 2,
            icon: 'bus',
            card_flipped: false
        }];

    const [cardvalues, setCardValues] = useState(cardList2021.easy);

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
    useEffect(() => {
        if (thegameMode === "easy") {
            setCardValues(shuffle(cardList2021.easy));
        }
        else if (thegameMode === "medium") {
            setCardValues(shuffle(cardList2021.medium));
        }
        else {
            setCardValues(shuffle(cardList2021.hard));
        }
    }, [thegameMode]);


    const cardFlip = (number) => {
        console.log(`top of card flip fn ${JSON.stringify(cardvalues)}`);
        let newCardsArray = JSON.parse(JSON.stringify(cardvalues));
        let indexofnewcard = newCardsArray.findIndex(item =>
            item.id === number);
        newCardsArray[indexofnewcard].card_flipped = true;
        console.log(`bottom of card flip fn ${JSON.stringify(newCardsArray)}`);
        setCardValues(newCardsArray);
    };


    return (
        <>
            <div style={allCards}>
                {cardvalues.map((card) => {
                    return <Card
                        key={card.id}
                        id={card.id}
                        comparisonValue={card.comparisonvalue}
                        icon={card.icon}
                        cardFlipped={card.card_flipped}
                        changeStatus={cardFlip} />
                })}
            </div>
        </>
    );
};

export default Cards;