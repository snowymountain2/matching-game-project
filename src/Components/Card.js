import React from 'react';
import AddAlertIcon from '@material-ui/icons/AddAlert';

const singleCard = {
    backgroundColor: 'yellow',
    margin: '5px 5px 5px 5px',
    height: '140px',
    width: '100px'
};

const Card = ({ icon }) => {
    return (
        <div style={singleCard} className="single-card">
            {icon}

        </div>
    );
};

export default Card;