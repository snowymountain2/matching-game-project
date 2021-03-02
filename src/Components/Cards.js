import React from 'react';
import Card from './Card';
import AddAlertIcon from '@material-ui/icons/AddAlert';


const allCards = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: 'gray'
};



const Cards = ({ thegameMode }) => {
    return (
        <>
            <div style={allCards}>
                <Card />
                <Card />
                <Card />
                <Card />
                {console.log(thegameMode)}
            </div>
            <div style={allCards}>
                <Card />
                <Card />
                <Card />
                <Card />
                <AddAlertIcon />
            </div>
        </>
    );
};

export default Cards;