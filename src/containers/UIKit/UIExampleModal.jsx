import React, {Fragment, useState} from 'react';
import {makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/core/SvgIcon/SvgIcon";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

const stylesExampleModal = makeStyles(() => ({
    closeIcon: {
        position: 'absolute',
        right: 15,
        top: 15,
        color: '#D8D7D5',
    },
}));

function UIExampleModal() {
    const classes = stylesExampleModal();

    const [openModal, toggleModal] = useState(false);

    return <Fragment>
        <Button
            variant="contained"
            onClick={() => toggleModal(true)}
        >Open Modal</Button>

        <Dialog open={openModal}>
            <IconButton
                className={classes.closeIcon}
                onClick={() => toggleModal(false)}
            >
                <CloseIcon />
            </IconButton>
            <DialogTitle disableTypography >
                Modal Heading
            </DialogTitle>
            <DialogContent>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore libero, ratione! Accusamus amet dignissimos eaque eveniet exercitationem facilis illum inventore iusto libero magnam maxime numquam obcaecati quasi ratione reiciendis, totam!
            </DialogContent>

            <DialogActions>

                <Button
                    variant="contained"
                    color="primary"
                >Confirm</Button>
                <Button
                    variant="outlined"
                    onClick={() => toggleModal(false)}
                >Cancel</Button>

            </DialogActions>
        </Dialog>
    </Fragment>;

}

export default UIExampleModal;
