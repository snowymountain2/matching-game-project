import React from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import { useState } from 'react';

const Mode = () => {

    const [gameMode, setGameMode] = useState("female")

    const grabGameMode = (e) => {
        e.preventDefault();
        console.log(e)
    }

    return (
        <div>
            <FormControl component="fieldset">
                <FormLabel component="legend">Mode</FormLabel>
                <RadioGroup row aria-label="gender" name="gender1" value={3} onChange={grabGameMode}>
                    <FormControlLabel value="female" control={<Radio />} label="Easy" />
                    <FormControlLabel value="male" control={<Radio />} label="Medium" />
                    <FormControlLabel value="other" control={<Radio />} label="Hard" />
                </RadioGroup>
            </FormControl>
        </div>
    );
};

export default Mode;