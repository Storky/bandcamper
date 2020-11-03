import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from "@material-ui/core";

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles(() => ({
    list: {
        width: 250,
    },
}));

const SideList = ({ toggle }) => {
    const classes = useStyles();

    return <div className={classes.list}>
        <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem
                    button
                    key={text}
                    onClick={() => toggle(false)}
                >
                    <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
        <Divider />
        <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem
                    button
                    key={text}
                    onClick={() => toggle(false)}
                >
                    <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
    </div>
};

SideList.propTypes = {
    toggle: PropTypes.func.isRequired,
};

const MainMenu = ({ open, toggle }) => {

    function close() {
        toggle(false)
    }

    return (
        <Drawer open={open} onClose={close}>
            <SideList toggle={toggle}/>
        </Drawer>
    );
};

MainMenu.propTypes = {
    open: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
};

export default MainMenu;
