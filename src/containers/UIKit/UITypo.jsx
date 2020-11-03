import React from 'react';
import {Typography} from "@material-ui/core";

const UiTypo = () => {
    return (
        <React.Fragment>
            <Typography variant='h1' >Heading 1</Typography>
            <Typography variant='h2' >Heading 2</Typography>
            <Typography variant='h3' >Heading 3</Typography>
            <Typography variant='h4' >Heading 4</Typography>
            <Typography variant='h5' >Heading 5</Typography>
            <Typography variant='h6' >Heading 6</Typography>
            <Typography variant='subtitle1' >subtitle1</Typography>
            <Typography variant='subtitle2' >subtitle2</Typography>
            <Typography variant='body1' >body1</Typography>
            <Typography variant='body2' >body2</Typography>
            <Typography variant='caption' >caption</Typography><br/>
            <Typography variant='button' >button</Typography><br/>
            <Typography variant='overline' >overline</Typography><br/>
            <Typography variant='srOnly' >srOnly</Typography><br/>
        </React.Fragment>
    );
};

export default UiTypo;
