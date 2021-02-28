import React from 'react';
import Card from './Card';
import { Button } from '@material-ui/core';

const allCards = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: 'gray'
};

const Cards = () => {
    return (
        <>
            <div style={allCards}>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div style={allCards}>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    );
};

export default Cards;