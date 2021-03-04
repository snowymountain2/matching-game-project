import React from 'react';
import Card from './Card';
import AddAlertIcon from '@material-ui/icons/AddAlert';


const someNumbers = [1, 2, 3, 4, 5, 6, 7, 8];


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

    return (
        <>
            <div style={allCards}>
                <Card />
                <Card />
                <Card />
                <Card />
                {console.log(thegameMode)}
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