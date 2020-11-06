import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import EyeIcon from 'shared/icons/EyeIcon';
import { updateObject } from 'shared/utilities/objectManager';
import { checkValidity } from 'shared/utilities/formValidation';
import * as actions from 'store/actions/';

import OutlinedInput from '@material-ui/core/OutlinedInput';

const useStyles = makeStyles(() => ({
    root: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 15,
    },
    passwordContainer: {
        width: '100%',
        position: 'relative',
        marginTop: '0',
        marginBottom: '50px',
    },
    passwordIcon: {
        marginTop: '0px',
        cursor: 'pointer',
    },
    passwordField: {
        margin: 0,
    },
    form: {
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    textField: {
        marginTop: '0',
        marginBottom: '0',
    },
    button: {
        marginTop: '5px',
    },
    formControl: {
        marginTop: '0',
        marginBottom: '20px',
    },
}));

const Signin = props => {
    const classes = useStyles();

    const [signInForm, setSignInForm] = useState({
        name: {
            label: 'Email',
            // value: '',
            value: 'storky-bus@yandex.ru',
            validation: {
                required: true,
                minLength: 4,
                maxLength: 64,
            },
            validity: {
                isValid: false,
                message: '',
            },
            touched: false,
        },
        password: {
            label: 'Password',
            visible: false,
            // value: '',
            value: '123qweasd',
            validation: {
                required: true,
                minLength: 4,
                maxLength: 64,
            },
            validity: {
                isValid: false,
                message: '',
            },
            touched: false
        }
    });


    // todo use form handling framework
    const inputChangedHandler = (event, controlName) => {
        const updatedControls = updateObject(signInForm, {
            [controlName]: updateObject(signInForm[controlName], {
                value: event.target.value,
                validity: checkValidity(
                    event.target.value,
                    signInForm[controlName].validation
                ),
                touched: true
            })
        });
        setSignInForm(updatedControls);
    };

    const togglePasswordVisibility = (controlName) => {
        const updatedControls = updateObject(
            signInForm,
            {
                [controlName]: updateObject(
                    signInForm[controlName],
                    {
                        visible: !signInForm[controlName].visible,
                    }
                )
            }
        );
        setSignInForm(updatedControls);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.onSignIn(signInForm.name.value, signInForm.password.value);
    };

    return (
        <Container maxWidth="sm" className={classes.root}>
            {props.isAuthenticated ? <Redirect to={props.loginRedirectPath} /> : null}
            <form onSubmit={submitHandler} className={classes.form} noValidate>
                <FormControl
                    variant='outlined'
                    className={classes.formControl}
                    error={!signInForm.name.validity.isValid && signInForm.name.touched}
                >
                    <InputLabel>{signInForm.name.label}</InputLabel>
                    <OutlinedInput
                        defaultValue={signInForm.name.value}
                        className={classes.textField}
                        onChange={event => inputChangedHandler(event, 'name')}
                    />
                    <FormHelperText>{signInForm.name.validity.message}</FormHelperText>
                </FormControl>
                <FormControl
                    variant='outlined'
                    className={classes.formControl}
                    error={!signInForm.password.validity.isValid && signInForm.password.touched}
                >
                    <InputLabel>{signInForm.password.label}</InputLabel>
                    <OutlinedInput
                        defaultValue={signInForm.password.value}
                        className={classes.textField}
                        type={signInForm.password.visible ? 'text' : 'password'}
                        onChange={event => inputChangedHandler(event, 'password')}
                        endAdornment={(
                            <EyeIcon
                                visible={signInForm.password.visible}
                                onClick={() => togglePasswordVisibility('password')}
                                className={classes.passwordIcon}
                            />
                        )}
                    />
                    <FormHelperText>{signInForm.password.validity.message}</FormHelperText>
                </FormControl>
                <Button
                    type="submit"
                    // disabled={!(
                    //     signInForm.name.validity.isValid
                    //     && signInForm.password.validity.isValid
                    // )}
                    className={classes.button}
                    variant="contained"
                >
                    Sign In
                </Button>
            </form>
        </Container>
    );
};

Signin.propTypes = {
    onSignIn: PropTypes.func.isRequired,
    // clearAuthError: PropTypes.func.isRequired,
    // isAuthenticated: PropTypes.bool,
    // loginRedirectPath: PropTypes.string,
    // error: PropTypes.string
};

const mapStateToProps = state => {
    return {
        // loading: state.login.loading,
        // error: state.login.error,
        // isAuthenticated: state.login.email !== null,
        // loginRedirectPath: state.login.loginRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSignIn: (name, password) => dispatch(actions.login(name, password)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
