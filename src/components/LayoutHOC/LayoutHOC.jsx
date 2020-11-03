import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

const useStyles = makeStyles(() => ({
    layoutContainer: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    layoutHeader: null,
    layoutMain: null,
    layoutFooter: {
        top: 'auto',
        bottom: 0,
    },
}));

const LayoutHOC = ({ children }) => {
    const classes = useStyles();
    return (
        <div className={classes.layoutContainer}>
            <Header customClass={classes.layoutHeader} />
            {children}
            <Footer customClass={classes.layoutFooter} />
        </div>
    );
};

LayoutHOC.propTypes = {
    children: PropTypes.node,
};

export default LayoutHOC;
