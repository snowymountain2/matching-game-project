import React, { useState, useEffect } from 'react';
import Card from './Card';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import { shuffle, selectCardSet } from '../Helper';

const Cards = ({ thefinallistofcards,
    thegameMode,
    updatethefinallistofcards,
    easyList,
    medList,
    hardList,
    updateeasyList,
    updatemedList,
    updatehardList,
    setAttempts,
    setScore,
    attempt }) => {

    const allCards = {
        display: 'flex',
        margin: 'auto',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginLeft: "8vw",
        marginRight: "8vw"
    };

    const selectCardUpdateMethod = (mode, theUpdatedList) => {
        if (mode === "easy") {
            return updateeasyList([...theUpdatedList]);
        } else if (mode === "medium") {
            return updatemedList([...theUpdatedList]);
        } else {
            return updatehardList([...theUpdatedList]);
        }
    }

    const cardFlip = (id) => {
        let updatedList = selectCardSet(thegameMode).map(item => {
            if (item.id == id) {
                return { ...item, card_flipped: true };
            }
            return item;
        });
        selectCardUpdateMethod(thegameMode, updatedList);
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
                        changeStatus={cardFlip}
                        setAttemptCount={setAttempts}
                        setScore={setScore}
                        attempt={attempt} />
                })}
            </div>
        </>
    );
};

export default Cards;