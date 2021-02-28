import React from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';

const Mode = () => {
    return (
        <div>
            <FormControl component="fieldset">
                <FormLabel component="legend">Mode</FormLabel>
                <RadioGroup row aria-label="gender" name="gender1" value={3} onChange={console.log('heee')}>
                    <FormControlLabel value="female" control={<Radio />} label="Easy" />
                    <FormControlLabel value="male" control={<Radio />} label="Medium" />
                    <FormControlLabel value="other" control={<Radio />} label="Hard" />
                </RadioGroup>
            </FormControl>
        </div>
    );
};

export default Mode;