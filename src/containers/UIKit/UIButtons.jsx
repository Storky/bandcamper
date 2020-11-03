import React from 'react';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    presentationItemsWr: {
        paddingTop: 20,
        paddingBottom: 20,
        display: 'flex',
        width: '100%',
        alignItems: 'center',

        '&>*': {
            marginRight: 10,
        }
    },
}));

const UIButtons = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <h2>Contained</h2>

            <ButtonGroup>
                <Button variant="contained">default</Button>
                <Button variant="contained" color="primary">primary</Button>
                <Button variant="contained" color="secondary">secondary</Button>
                <Button variant="contained" disabled>disabled</Button>
            </ButtonGroup>

            <div className={classes.presentationItemsWr}>
                <Button variant="contained" >default</Button>
                <Button variant="contained" size="small">default small</Button>
            </div>

            <h2>Outlined</h2>
            <ButtonGroup>
                <Button variant="outlined">default</Button>
                <Button variant="outlined" color="primary">primary</Button>
                <Button variant="outlined" color="secondary">secondary</Button>
                <Button variant="outlined" disabled>disabled</Button>
            </ButtonGroup>

            <div className={classes.presentationItemsWr}>
                <Button variant="outlined" >outlined</Button>
                <Button variant="outlined" size="small">outlined small</Button>
            </div>

            <h2>Text (default)</h2>
            <ButtonGroup variant="text">
                <Button>default</Button>
                <Button color="primary">primary</Button>
                <Button color="secondary">secondary</Button>
                <Button disabled>disabled</Button>
            </ButtonGroup>

            <div className={classes.presentationItemsWr}>
                <Button>text</Button>
                <Button size="small">text small</Button>
            </div>
        </React.Fragment>
    );
};

export default UIButtons;
