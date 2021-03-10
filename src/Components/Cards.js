import React, { useState, useEffect } from 'react';
import Card from './Card';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import { shuffle } from '../Helper';
import { cardList2020 } from '../cardslist';

const Cards = ({ thegameMode, thelistofcards }) => {

    const [cardvalues, setCardValues] = useState(shuffle(cardList2020));

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


    const cardFlip = (id) => {
        let updatedList = cardvalues.map(item => {
            if (item.id == id) {
                return { ...item, card_flipped: true };
            }
            return item;
        });

        setCardValues([...updatedList]);
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