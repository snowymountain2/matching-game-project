import React from 'react';
import Card from './Card';

const allCards = {
    width: '500px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    backgroundColor: 'black'
};

const Cards = () => {
    return (
        <div style={allCards}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
};

export default Cards;