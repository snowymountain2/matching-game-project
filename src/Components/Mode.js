import React from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';

const Mode = ({ thegameMode, setGameMode, setScore, setSeconds, startButtonClick }) => {

    const modeStyles = {
        backgroundColor: 'yellow',
        margin: '5px 5px 5px 5px',
        width: '400px'
    };

    const grabGameMode = (e) => {
        e.preventDefault();
        setGameMode(e.target.value);
        setScore(prevState => prevState * 0);
    }

    return (
        <div style={modeStyles}>
            <FormControl component="fieldset">
                <FormLabel component="legend">Mode</FormLabel>
                <RadioGroup row aria-label="gender" name="gender1" value={thegameMode} onChange={grabGameMode}>
                    <FormControlLabel value="easy" disabled={startButtonClick ? true : false} control={<Radio />} label="Easy" />
                    <FormControlLabel value="medium" disabled={startButtonClick ? true : false} control={<Radio />} label="Medium" />
                    <FormControlLabel value="hard" disabled={startButtonClick ? true : false} control={<Radio />} label="Hard" />
                </RadioGroup>
            </FormControl>
        </div>
    );
};

export default Mode;