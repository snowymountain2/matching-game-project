import React, { useState, useEffect } from 'react';
import Card from './Card';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import { shuffle, selectCardSet } from '../Helper';

const Cards = ({ thefinallistofcards, thegameMode, updatethefinallistofcards, easyList, medList, hardList }) => {

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
        console.log(thefinallistofcards);
        let updatedList = thefinallistofcards.map(item => {
            if (item.id == id) {
                return { ...item, card_flipped: true };
            }
            return item;
        });
        updatethefinallistofcards([...updatedList]);
    };

    const selectCardSet = (mode) => {
        if (mode === "easy") {
            return easyList;
        } else if (mode === "medium") {
            return medList;
        } else {
            return hardList;
        }
    }

    return (
        <>
            <div style={allCards}>
                {selectCardSet(thegameMode).map((card) => {
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