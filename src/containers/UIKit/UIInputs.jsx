import React from 'react';
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FilledInput from "@material-ui/core/FilledInput";
import FormHelperText from "@material-ui/core/FormHelperText";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Input from "@material-ui/core/Input";

const UIInputs = () => {
    return (
        <React.Fragment>
            <h2>Filled Input</h2>
            <Grid container spacing={1}>
                <Grid item md={4}>
                    <h4>Outlined</h4>
                    <FormControl
                        variant='filled'
                    >
                        <InputLabel>Outlined Unfocused</InputLabel>
                        <FilledInput/>
                        <FormHelperText>Helper Text Without Error</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item md={4}>
                    <h4>Error</h4>
                    <FormControl
                        variant='filled'
                        error={true}
                    >
                        <InputLabel>Invalid with value</InputLabel>
                        <FilledInput
                            placeholder="Invalid with value"
                            defaultValue={4}
                        />
                        <FormHelperText>Error Helper Text</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item md={4}>
                    <h4>Disabled with value</h4>
                    <FormControl
                        variant='filled'
                        disabled={true}
                    >
                        <InputLabel>Input Label</InputLabel>
                        <FilledInput
                            defaultValue={4}
                        />
                        <FormHelperText>Helper Text Without Error</FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>

            <h2>Outlined Input</h2>
            <Grid container spacing={1}>
                <Grid item md={4}>
                    <h4>Outlined</h4>
                    <FormControl
                        variant='outlined'
                    >
                        <InputLabel>Outlined Unfocused</InputLabel>
                        <OutlinedInput/>
                        <FormHelperText>Helper Text Without Error</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item md={4}>
                    <h4>Error</h4>
                    <FormControl
                        variant='outlined'
                        error={true}
                    >
                        <InputLabel>Invalid with value</InputLabel>
                        <OutlinedInput
                            placeholder="Invalid with value"
                            defaultValue={4}
                        />
                        <FormHelperText>Error Helper Text</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item md={4}>
                    <h4>Disabled with value</h4>
                    <FormControl
                        variant='outlined'
                        disabled={true}
                    >
                        <InputLabel>Input Label</InputLabel>
                        <OutlinedInput
                            defaultValue={4}
                        />
                        <FormHelperText>Helper Text Without Error</FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>

            <h2>Default Input</h2>
            <Grid container spacing={1}>
                <Grid item md={4}>
                    <h4>Default</h4>
                    <FormControl>
                        <InputLabel>Default Unfocused</InputLabel>
                        <Input/>
                        <FormHelperText>Helper Text Without Error</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item md={4}>
                    <h4>Error</h4>
                    <FormControl
                        error={true}
                    >
                        <InputLabel>Invalid with value</InputLabel>
                        <Input
                            placeholder="Invalid with value"
                            defaultValue={4}
                        />
                        <FormHelperText>Error Helper Text</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item md={4}>
                    <h4>Disabled with value</h4>
                    <FormControl
                        disabled={true}
                    >
                        <InputLabel>Input Label</InputLabel>
                        <Input
                            defaultValue={4}
                        />
                        <FormHelperText>Helper Text Without Error</FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default UIInputs;
