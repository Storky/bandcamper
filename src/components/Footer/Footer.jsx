import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';

import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, fade } from "@material-ui/core";
import clsx from 'clsx';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            backgroundColor: fade(theme.palette.common.black, 0.7),
        },
        grow: {
            flexGrow: 1,
        },
    }
});

const Footer = ({ customClass, history }) => {
    const classes = useStyles();

    let footerNavItemsArray = [
        {
            link: '/nosql-table',
            label: 'NoSQL Table',
        },
        {
            link: '/mechs',
            label: 'Mechs',
        },
        {
            link: '/uikit',
            label: 'UI Kit',
        },
    ];

    return (
        <React.Fragment>
            <AppBar
                className={clsx(
                    customClass,
                    classes.root
                )}
                component="footer"
            >
                <Container maxWidth='lg'>
                    <Toolbar disableGutters>
                        <React.Fragment>
                            {footerNavItemsArray.map(
                                i => <Button
                                    key={i.label}
                                    onClick={() => history.push(i.link)}
                                    color="inherit"
                                >{i.label}</Button>
                            )}
                        </React.Fragment>
                        <div className={classes.grow} />
                        <Button color="inherit">Link5</Button>
                        <Button color="inherit">Link6</Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </React.Fragment>
    );
};


Footer.propTypes = {
    customClass: PropTypes.string,
    history: PropTypes.object
};
Footer.defaultTypes = {
    customClass: '',
};

export default withRouter(Footer);
