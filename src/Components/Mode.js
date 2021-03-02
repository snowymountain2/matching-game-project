import React from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';

const Mode = ({ thegameMode, setGameMode }) => {

    const grabGameMode = (e) => {
        e.preventDefault();
        setGameMode(e.target.value);
    }

    return (
        <div>
            <FormControl component="fieldset">
                <FormLabel component="legend">Mode</FormLabel>
                <RadioGroup row aria-label="gender" name="gender1" value={thegameMode} onChange={grabGameMode}>
                    <FormControlLabel value="easy" control={<Radio />} label="Easy" />
                    <FormControlLabel value="medium" control={<Radio />} label="Medium" />
                    <FormControlLabel value="hard" control={<Radio />} label="Hard" />
                </RadioGroup>
            </FormControl>
        </div>
    );
};

export default Mode;