import React, { useState, useEffect } from 'react';
import Card from './Card';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import { shuffle } from '../Helper';
import cardList from '../cardslist';

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

    const [cardvalues, setCardValues] = useState(shuffle(cardList.easy));

    useEffect(() => {
        console.log(thegameMode);

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

    const cardFlip = (id) => {
        const currentCardList = cardvalues.map(item => {
            if (item.number === id) {
                return { ...item, card_flipped: true }
            }
            return item;
        });
        setCardValues(currentCardList);
    }

    return (
        <>
            <div style={allCards}>
                {cardvalues.map((card, index) => {
                    return <Card
                        id={card.number}
                        icon={card.icon}
                        cardFlipped={card.card_flipped}
                        changeStatus={cardFlip} />
                })}
            </div>
        </>
    );
};

export default Cards;