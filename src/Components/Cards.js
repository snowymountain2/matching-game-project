import React, { useState, useEffect } from 'react';
import Card from './Card';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import { shuffle } from '../Helper';
import cardList from '../cardslist';

const Cards = ({ thegameMode }) => {

    const [cardvalues, setCardValues] = useState(cardList.easy);

    console.log(cardvalues);

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
            setCardValues(shuffle(cardList.easy));
        }
        else if (thegameMode === "medium") {
            setCardValues(shuffle(cardList.medium));
        }
        else {
            setCardValues(shuffle(cardList.hard));
        }
    }, [thegameMode]);
    const cardFlip = (number) => {
        const currentCardList = cardvalues.map(item => {
            return item;
        });
        console.log(cardvalues);
        setCardValues(currentCardList);
    }
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