import React, {useState} from 'react';
import Container from "@material-ui/core/Container";
import {useStylesMechsPage} from "containers/Mechs/syles";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import {connect} from "react-redux";
import * as actions from 'store/actions/';
import {updateObject} from "shared/utilities/objectManager";
import {checkValidity} from "shared/utilities/formValidation";
import {initialStateMechs} from "containers/Mechs/mechs.config";

const MechsPage = (props) => {
    const classes = useStylesMechsPage();

    const [mechsForm, setMechsForm] = useState(initialStateMechs);

    const inputChangedHandler = (event, controlName) => {
        const updatedControls = updateObject(mechsForm, {
            [controlName]: updateObject(mechsForm[controlName], {
                value: event.target.value,
                validity: checkValidity(
                    event.target.value,
                    mechsForm[controlName].validation
                ),
                touched: true
            })
        });
        setMechsForm(updatedControls);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.onMechsFormSubmit({
            name: mechsForm.name.value,
            abbr: mechsForm.abbr.value,
            weight: mechsForm.weight.value,
        });
    };

    return (
        <Container maxWidth='lg' className={classes.pageContainer}>

            <form onSubmit={submitHandler} className={classes.form} noValidate>

                <FormControl
                    variant='outlined'
                    className={classes.formControl}
                    error={!mechsForm.name.validity.isValid && mechsForm.name.touched}
                >
                    <InputLabel>{mechsForm.name.label}</InputLabel>
                    <OutlinedInput
                        defaultValue={mechsForm.name.value}
                        className={classes.textField}
                        onChange={event => inputChangedHandler(event, 'name')}
                    />
                    <FormHelperText>{mechsForm.name.validity.message}</FormHelperText>
                </FormControl>

                <FormControl
                    variant='outlined'
                    className={classes.formControl}
                    error={!mechsForm.abbr.validity.isValid && mechsForm.abbr.touched}
                >
                    <InputLabel>{mechsForm.abbr.label}</InputLabel>
                    <OutlinedInput
                        defaultValue={mechsForm.abbr.value}
                        className={classes.textField}
                        onChange={event => inputChangedHandler(event, 'abbr')}
                    />
                    <FormHelperText>{mechsForm.abbr.validity.message}</FormHelperText>
                </FormControl>

                <FormControl
                    variant='outlined'
                    className={classes.formControl}
                    error={!mechsForm.weight.validity.isValid && mechsForm.weight.touched}
                >
                    <InputLabel>{mechsForm.weight.label}</InputLabel>
                    <OutlinedInput
                        defaultValue={mechsForm.weight.value}
                        className={classes.textField}
                        onChange={event => inputChangedHandler(event, 'weight')}
                    />
                    <FormHelperText>{mechsForm.weight.validity.message}</FormHelperText>
                </FormControl>

                <Button
                    type="submit"
                    // disabled={!(
                    //     mechsForm.name.validity.isValid
                    //     && mechsForm.password.validity.isValid
                    // )}
                    className={classes.button}
                    variant="contained"
                >Submit</Button>
            </form>
        </Container>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        onMechsFormSubmit: (data) => dispatch(actions.writeMechsData(data)),
    };
};

export default connect(null, mapDispatchToProps)(MechsPage);