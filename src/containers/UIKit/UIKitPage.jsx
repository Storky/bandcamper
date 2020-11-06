import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import TruncateStringWithTip from "shared/Truncate/TruncateStringWithTip";
import TabsEngine from "shared/Tabs";

import UIButtons from "containers/UIKit/UIButtons";
import UIExampleModal from "containers/UIKit/UIExampleModal";
import UiCheckboxes from "containers/UIKit/UICheckboxes";
import UIInputs from "containers/UIKit/UIInputs";
import UITypo from "containers/UIKit/UITypo";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";

const tabsDataArray = [
    {
        title: 'Buttons',
        content: <Grid container spacing={3} >

            <Grid item md={6}>
                <h1>Buttons</h1>
                <UIButtons/>
            </Grid>

            <Grid item md={6}>
                <h1>TODO</h1>
                <List component="nav">
                    <ListItem><ListItemText primary="Lists" /></ListItem>
                    <ListItem><ListItemText primary="Date / Time pickers" /></ListItem>
                    <ListItem><ListItemText primary="Select" /></ListItem>
                    <ListItem><ListItemText primary="Slider" /></ListItem>
                    <ListItem><ListItemText primary="Switch" /></ListItem>
                    <ListItem><ListItemText primary="TextField" /></ListItem>
                    <ListItem><ListItemText primary="Transfer List" /></ListItem>
                    <ListItem><ListItemText primary="Links" /></ListItem>
                    <ListItem><ListItemText primary="Stepper" /></ListItem>
                    <ListItem><ListItemText primary="Card" /></ListItem>
                    <ListItem><ListItemText primary="Expansion Panel" /></ListItem>
                    <ListItem><ListItemText primary="Progress" /></ListItem>
                    <ListItem><ListItemText primary="Avatar" /></ListItem>
                    <ListItem><ListItemText primary="Badge" /></ListItem>
                    <ListItem><ListItemText primary="Chip" /></ListItem>
                    <ListItem><ListItemText primary="Table" /></ListItem>
                    <ListItem><ListItemText primary="Autocomplete" /></ListItem>
                    <ListItem><ListItemText primary="Rating" /></ListItem>
                    <ListItem><ListItemText primary="Tree View" /></ListItem>
                    <Divider />
                    <ListItem><ListItemText primary="Modal" /></ListItem>
                    <ListItem><ListItemText primary="Menus" /></ListItem>
                    <ListItem><ListItemText primary="Dialog" /></ListItem>
                    <ListItem><ListItemText primary="Snackbar" /></ListItem>
                    <ListItem><ListItemText primary="Popper" /></ListItem>
                    <ListItem><ListItemText primary="Popover" /></ListItem>
                    <ListItem><ListItemText primary="Tooltip" /></ListItem>
                </List>
            </Grid>

        </Grid>,
    },
    {
        title: 'Inputs & Checkboxes',
        content: <Grid container spacing={3} >

            <Grid item md={6}>
                <h2>Checkboxes</h2>
                <UiCheckboxes/>
            </Grid>

            <Grid item md={6}>
                <h1>Inputs</h1>
                <UIInputs/>
            </Grid>

        </Grid>,
    },
    {
        title: 'Popovers',
        content: <Grid container spacing={3} >

            <Grid item md={6}>
                <h2>Example Modal MuiDialog</h2>
                <UIExampleModal/>
            </Grid>

            <Grid item md={6}>
                <h2>Other</h2>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita facere id natus! Aliquid, animi consectetur ex illum ipsum laborum laudantium.
            </Grid>

        </Grid>,
    },
    {
        title: 'Typo',
        content: <Grid container spacing={3} >

            <Grid item md={6}>
                <h1>Typography</h1>
                <UITypo/>
            </Grid>

            <Grid item md={6}>
                <h2>Other</h2>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita facere id natus! Aliquid, animi consectetur ex illum ipsum laborum laudantium.
            </Grid>

        </Grid>,
    },
    {
        title: 'Shared',
        content: <Grid container spacing={3} >

            <Grid item md={6}>
                <h1>Text ellipsis with tooltip</h1>
                200px
                <div style={{
                    width: '200px',
                    border: '2px solid blue',
                }}>
                    {/*width minus border width*/}
                    <TruncateStringWithTip width='196'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur assumenda dignissimos doloremque dolores eius error eum hic id iste labore laboriosam magnam maxime nisi provident quo sit suscipit tenetur ullam, vero! Ad eius eveniet ipsam magnam modi neque perferendis quisquam totam voluptas, voluptatum! Culpa eos fuga nobis suscipit temporibus?
                    </TruncateStringWithTip>
                </div>


            </Grid>

            <Grid item md={6}>
                <h2>Lorem</h2>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita facere id natus! Aliquid, animi consectetur ex illum ipsum laborum laudantium.
            </Grid>

        </Grid>,
    },
];

const useStyles = makeStyles(() => ({
    pageContainer: {
        alignSelf: 'flex-start',
        paddingBottom: 70,
    },
}));

const UIKitPage = () => {
    const classes = useStyles();

    return (
        <Container maxWidth='lg' className={classes.pageContainer}>
            <TabsEngine tabsDataArray={tabsDataArray}/>
        </Container>
    );
};

export default UIKitPage;
