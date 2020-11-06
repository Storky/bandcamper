import {makeStyles} from "@material-ui/core/styles";

export const useStylesMechsPage = makeStyles(() => ({
    pageContainer: {
        alignSelf: 'flex-start',
        paddingTop: 30,
        paddingBottom: 70,
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
