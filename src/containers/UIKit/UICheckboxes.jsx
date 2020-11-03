import React, {Fragment, useState} from 'react';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";

function UiCheckboxes() {

    const [checked, toggleChecked] = useState(false);

    const [radioValue, setRadioValue] = React.useState('female');

    return <Fragment>

        <FormControlLabel
            control={
                <Checkbox
                    // color='primary'
                    size='small'
                    checked={checked}
                    onChange={() => toggleChecked(!checked)}
                    value="checkedValue" />
            }
            label="Default checkbox"
        />

        <FormControlLabel
            control={
                <Checkbox
                    color='primary'
                    size='small'
                    checked={checked}
                    onChange={() => toggleChecked(!checked)}
                    value="checkedValue" />
            }
            label="Primary checkbox"
        />

        <FormControlLabel
            control={
                <Checkbox
                    color='secondary'
                    checked={checked}
                    onChange={() => toggleChecked(!checked)}
                    value="checkedValue" />
            }
            label={<div>Secondary checkbox</div>}
        />

        <RadioGroup
            name="gender"
            value={radioValue}
            onChange={event => setRadioValue(event.target.value)}
        >
            <FormControlLabel
                value="female"
                control={<Radio color='primary'/>}
                label="Female"
            />
            <FormControlLabel
                value="male"
                control={<Radio color='secondary' />}
                label="Male"
            />
        </RadioGroup>

    </Fragment>
}

export default UiCheckboxes;
